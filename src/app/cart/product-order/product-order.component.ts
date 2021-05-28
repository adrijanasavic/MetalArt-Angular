import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject, Subscription } from 'rxjs';
import { CartProduct } from 'src/app/shared/models/cartProduct';
import { ShopService } from 'src/app/shared/services/shop.service';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent implements OnInit {

  orderForm: FormGroup;

  orderSubject: Subject<any> = new Subject<any>();
  orderStream: Observable<any> = this.orderSubject.asObservable();
  orderSubscription: Subscription;

  constructor(
    private _snackBar: MatSnackBar,
    private _shopService: ShopService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.orderSubscription = this.orderStream
    .subscribe({
        next(value){
          console.log(value);
        }
    })
  }

  buildForm(){
    this.orderForm = new FormGroup({
      'fname': new FormControl(''),
      'lname': new FormControl(''),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phonenumber': new FormControl(''),
      'address': new FormControl(''),
      'paymentmethod': new FormControl('creditcard'),
      'aboutus': new FormControl(null),
      'comment': new FormControl('')
    })
  }

  onSubmit(){
    if(this.orderForm.valid){
      this.orderSubject.next(this.orderForm.value);
      this._shopService.getCartProducts()
      .subscribe(
        (res: CartProduct[]) => {
          res.forEach(element => {
            this._shopService.removeFromCart(element.id, element.quantity)
            .subscribe(
              (res) => console.log(res),
              (error) => console.log(error)
            )
          });
        },
        (error) => console.log(error)
      );
      this._snackBar.open('Order received successfully.', 'OK', {
        duration: 2000,
      });
      this.orderForm.reset();
      this.orderForm.get('paymentmethod').setValue('creditcard');
    }
    else{
      console.log(this.orderForm.errors);
      this._snackBar.open('Fill form correctly.', 'OK', {
        duration: 2000,
      });
      this.orderForm.get('email').markAsTouched();
    }
  }

}
