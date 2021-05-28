import { MeetYouDialogComponent } from 'src/app/auth/meet-you-dialog/meet-you-dialog.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { ShopService } from 'src/app/shared/services/shop.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CartProduct } from 'src/app/shared/models/cartProduct';
import { AuthService } from 'src/app/shared/services/auth.service';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']

})
export class ProductComponent implements OnInit {

  selectedProductID: number;
  selectedProduct: Product;
  prevNextProducts: number[] = [0, 0];

  constructor(
    private _route: ActivatedRoute,
    private _shopService: ShopService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _authService: AuthService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.selectedProductID = this._route.snapshot.params['id'];
    this._route.params
    .subscribe(
      (params: Params) => {
        this.selectedProductID = params['id'];
        this.getProductsByProductId();
        this.getPrevNextProducts();
      }
    )
  }

  getProductsByProductId(){
    this.selectedProduct = this._shopService.getProductsByProductId(this.selectedProductID);
  }

  getPrevNextProducts(){
    this.prevNextProducts = this._shopService.getPrevNextProducts(this.selectedProductID);
  }

  addToCart(selectedP: Product, quantity: number){
    if(this._authService.isLogged()){
      if(quantity < 100 && quantity > 0){
        this._shopService.getCartProducts().subscribe(
          (cart: CartProduct[]) => {
            this._shopService.addToCart(selectedP, quantity, cart)
            .subscribe(
              (cartProduct: any) => {
                this._shopService.emitCartNumberChangeEvent('+', quantity);
                this._snackBar.open('The product is added to the cart.', 'OK', {
                  duration: 2000,
                });
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        )
      }
      else{
        this._snackBar.open('Quantity is not valid!', 'OK', {
          duration: 2000,
        });
      }
    }
    else{
      this.dialog.open(MeetYouDialogComponent, {
        autoFocus: false,
        disableClose: true,
        panelClass: 'my-class'
    })
 
    }
  }

  goToPrevOrNextProduct(flag: string){
    if(flag == 'prev' && this.prevNextProducts[0] != 0){
      this._router.navigate(['/product/'+ this.prevNextProducts[0]]);
    }
    else if(flag == 'next' && this.prevNextProducts[1] != 0){
      this._router.navigate(['/product/'+ this.prevNextProducts[1]]);
    }
  }

}
