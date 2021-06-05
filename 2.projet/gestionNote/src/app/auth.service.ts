import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
  }

  logIn() {
    this.router.navigateByUrl("home");
  }

  logOut() {
    this.router.navigateByUrl("");
  }
}
