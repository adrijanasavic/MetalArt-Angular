import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shared/services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(
    private _shopService: ShopService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();

  }
  categories = [];

  getAllCategories(){
    this.categories = this._shopService.categories;
  }


}
