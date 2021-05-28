import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase";

@Injectable({ providedIn: 'root' })
export class AuthService{
    token: string;
    constructor(
        private _router: Router
    ){}

    signupUser(email: string, sifra: string){
        firebase.auth().createUserWithEmailAndPassword(email, sifra)
        .catch(
            (error) => console.log(error)
        )
    }

    loginUser(email: string, sifra: string){
        firebase.auth().signInWithEmailAndPassword(email, sifra)
        .then(
            (response) => {
                this._router.navigate(['/']);
                firebase.auth().currentUser.getIdToken()
                .then(
                    (token: string) => this.token = token
                )
            }
        )
        .catch(
            (error) => console.log(error)
        )
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (token: string) => this.token = token
        )

        return this.token;
    }

    isLogged(){
        return this.token != null;
    }

    logout(){
        firebase.auth().signOut();
        this.token = null;
    }
}