import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticate(username: string, password: string) {
    if(username==='Karen' && password ==='123')
    {
      sessionStorage.setItem('authenticatedUser',username)
      return true
    }
    else{return false}
  }
  isUserLoggedIn()
  {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
    
  }
  getUserName()
  {
    return sessionStorage.getItem('authenticatedUser')
  }
  logout()
  {
    sessionStorage.removeItem('authenticatedUser')
  }
  constructor() { }
}
