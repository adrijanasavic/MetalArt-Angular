import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { SignUp } from 'src/app/shared/models/signup';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpProfile: SignUp = null;
  signUpSubject: Subject<SignUp> = new Subject<SignUp>();
  signUpStream: Observable<SignUp> = this.signUpSubject.asObservable();
  signUpSubscription: Subscription;
  
  constructor(
    private _authService: AuthService

  ) { }

  ngOnInit(): void {
    this.signUpSubscription = this.signUpStream
    .subscribe({
        next(value){
          console.log(value.fname, value.lname, value.email);
        }
    })
  }

  signup(fname: string, lname: string, email: string, password: string){
    this.signUpProfile = new SignUp(fname, lname, email, password);
    this.signUpSubject.next(this.signUpProfile);
    this._authService.signupUser(email, password);
  }

}
