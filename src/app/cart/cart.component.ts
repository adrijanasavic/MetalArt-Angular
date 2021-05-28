import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartProduct } from '../shared/models/cartProduct';
import { ShopService } from '../shared/services/shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: CartProduct[] = [];
  subtotal: number = 0;

  constructor(
    private _shopService: ShopService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getCartData();
  }

  getCartData(){
    this._shopService.getCartProducts().subscribe(
      (cartProducts: CartProduct[]) => {
        this.cartProducts = cartProducts;
        this.calculateSubtotal();
      },
      (error) => console.log(error)
    );
  }

  removeProductFromCart(cartProductsID: number, quantity: number){
    this._shopService.removeFromCart(cartProductsID, quantity)
    .subscribe(
      (res) => {
        this.getCartData();
      },
      (error) => console.log(error)
    );
  }

  calculateSubtotal(){
    this.subtotal = 0;
    this.cartProducts.forEach(prod => {
      this.subtotal += prod.price * prod.quantity
    });
  }

  checkout(){
    if(this.subtotal == 0){
      this._snackBar.open('Cart is empty.', 'OK', {
        duration: 2000,
      });
    }
    else{
      this._router.navigate(['/order']);
    }
  }

  quantityChanged(productID: number, newValue: number){
    if(newValue > 99 || newValue < 1){
      this._snackBar.open('Incorrect value for quantity.', 'OK', {
        duration: 2000,
      });
      newValue = 1;
    }
    this._shopService.getCartProductByID(productID)
    .subscribe(
      (res: CartProduct) => {
        res.quantity = newValue;
        this._shopService.editProductFromCart(res)
        .subscribe(
          (res) => {
            console.log(res);
            this.getCartData();
          },
          (error) => console.log(error)
        )
      },
      (err) => console.log(err)
    )
  }
}
