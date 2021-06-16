import { Component } from '@angular/core';
import firebase from 'firebase';
import { AuthService } from './shared/services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MetalArt';

  constructor(
    public _authService: AuthService
    ){}
    ngOnInit() {
      firebase.initializeApp({
        apiKey: 'AIzaSyCpeT7xJP4rPmBY9Vg7FtE96BvPbxhUA3o',
        authDomain: 'metal-art-dbb29.firebaseapp.com',
        databaseURL: 'https://metal-art-dbb29-default-rtdb.firebaseio.com',
        projectId: 'metal-art-dbb29',
        storageBucket: 'metal-art-dbb29.appspot.com',
        messagingSenderId: '219922891107',
        appId: '1:219922891107:web:958f9356455cd0ff9e1356',
        measurementId: 'G-XECKMC7746',
      });
    }
}
