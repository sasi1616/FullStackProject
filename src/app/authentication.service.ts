import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  /**authenticate check entered username and password equal to sasi and Isas@1234
   * these are equal means it return true otherwise it return false
   */
  authenticate(username : any, password : any)  {
    if (username === "sasi" && password === "Isas@1234") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }
  /**it store username in session storage */
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)//return false
  }
  logOut() {
    sessionStorage.removeItem('username')
    
  }
}
