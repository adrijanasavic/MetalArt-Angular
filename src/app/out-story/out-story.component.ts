import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'; 

@Component({
  selector: 'app-out-story',
  templateUrl: './out-story.component.html',
  styleUrls: ['./out-story.component.css']
})
export class OutStoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
    })
  }

}
