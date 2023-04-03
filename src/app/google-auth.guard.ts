import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthGuard implements CanActivate {

  constructor(private readonly oAuthService: OAuthService, private readonly router: Router) { }

  // canActivate(): boolean {
  //   if (this.oAuthService.hasValidAccessToken()) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/login']); // redirect to login page
  //     return false;
  //   }
  // }

  canActivate(): boolean {
    console.log('Checking authentication status...');
    console.log('hasValidAccessToken:', this.oAuthService.hasValidAccessToken());
    
    if (this.oAuthService.hasValidAccessToken()) {
      console.log('Access token is valid.');
      return true;
    } else {
      console.log('Access token is not valid. Redirecting to login page...');
      this.router.navigate(['/login']); // redirect to login page
      return false;
    }
  }
}
