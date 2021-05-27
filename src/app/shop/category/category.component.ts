import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from 'src/app/shared/models/category';
import { Product } from 'src/app/shared/models/product';
import { ShopService } from 'src/app/shared/services/shop.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  selectedCategory: Category;
  products: Product[];

  constructor(
    private _route: ActivatedRoute,
    private _shopService: ShopService,
    private _router: Router
    ) { }

  ngOnInit() {
    this.selectedCategory = {
      id: this._route.snapshot.params['id'],
      name: this._route.snapshot.params['name'],
      des: this._route.snapshot.params['des'],
      imgSrc:this._route.snapshot.params['imgSrc']

    }
    this._route.params
    .subscribe(
      (params: Params) => {
        this.selectedCategory.id = params['id'];
        this.selectedCategory.name = params['name'];
        this.selectedCategory.des = params['des'];
        this.selectedCategory.imgSrc = params['imgSrc'];

        this.getProductsByCategoryId();
      }
    )
  }

  getProductsByCategoryId(){
    this.products = this._shopService.getProductsByCategoryId(this.selectedCategory.id);
  }

  openProductDetails(product){
    this._router.navigate(['/product/'+product.id]);
  }
}
