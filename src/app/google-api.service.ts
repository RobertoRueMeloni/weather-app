import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

const oAuthconfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  // redirectUri: 'http://localhost:4200/dashboard',
  //clientId: '488364931693-j4obtalt2tbl5f8plcpic9jfi3trmhkr.apps.googleusercontent.com',
  redirectUri: 'http://localhost',
  clientId:'488364931693-277uss9lma7d15e15c1rm3u4n7kt6cab.apps.googleusercontent.com',
  scope: 'openid profile email'
}
@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(oAuthconfig)
    oAuthService.loadDiscoveryDocument().then( () =>{
      oAuthService.tryLoginImplicitFlow().then( ()=>{
        if (!oAuthService.hasValidAccessToken()){
          oAuthService.initLoginFlow()
        } else{
          oAuthService.loadUserProfile().then( (userProfile)=>{
            console.log(JSON.stringify(userProfile))
          })
        }
      })
    })
   }
}
