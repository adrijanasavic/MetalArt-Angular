import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _router: Router,

  ) { }

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
    })
    
  }
  openOurStory(){
    this._router.navigate(['/out-story']);
  }
}
