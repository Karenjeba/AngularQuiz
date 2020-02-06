import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.harcodedAuthentication.isUserLoggedIn())
      return true
    this.router.navigate(['login'])
    return false
  }
  constructor(private harcodedAuthentication:AuthenticationService ,private router:Router) { }
  
}
