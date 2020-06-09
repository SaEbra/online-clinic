import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  constructor(public afAuth: AngularFireAuth, private router: Router){}

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean | Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     this.afAuth.onAuthStateChanged((user: firebase.User) => {
  //       if (user) {
  //         resolve(true);
  //       } else {
  //         this.router.navigate(['/login']);
  //         resolve(false);
  //       }
  //     });
  //   });
  // }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  isLoggedin(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  logout(){
    this.afAuth.signOut().then(res=>{
      this.router.navigate(['/add']);
    });
  }

}

