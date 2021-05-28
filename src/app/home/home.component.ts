import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos'; 
import { ShopService } from '../shared/services/shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories = [];

  constructor(
    private _router: Router,
    private _shopService: ShopService


  ) { }

  ngOnInit(): void {
    this.getAllCategories();

    AOS.init({
      duration: 1200,
    })
    
  }

  openOurStory(){
    this._router.navigate(['/out-story']);
  }

  openGallery(){
    this._router.navigate(['/gallery']);
  }
  
  openContact(){
    this._router.navigate(['/contact']);
  }

  openShop(){
    this._router.navigate(['/shop']);
  }

  getAllCategories(){
    this.categories = this._shopService.categories;
  }
}
