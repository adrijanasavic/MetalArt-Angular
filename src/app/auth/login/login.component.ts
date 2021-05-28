import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _authService: AuthService

  ) { }

  ngOnInit(): void {
  }

  login(email: string, password: string){
    console.log(email, password);
    this._authService.loginUser(email, password);
  }
}
