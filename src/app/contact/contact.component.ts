import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeService } from '../shared/services/home.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private _homeService: HomeService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }
  
  emailSubscribe(email: string) {
    this._homeService.emitEmailChangeEvent(email);
  }

  sendMessage(form: NgForm){
    console.log(form.value);
  }

}
