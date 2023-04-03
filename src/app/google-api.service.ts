// import { Injectable } from '@angular/core';
// import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

// const oAuthconfig: AuthConfig = {
//   issuer: 'https://accounts.google.com',
//   strictDiscoveryDocumentValidation: false,
//   // redirectUri: 'http://localhost:4200/dashboard',
//   //clientId: '488364931693-j4obtalt2tbl5f8plcpic9jfi3trmhkr.apps.googleusercontent.com',
//   redirectUri: 'http://localhost:4200',
//   // redirectUri: '',
//   clientId:'488364931693-j4obtalt2tbl5f8plcpic9jfi3trmhkr.apps.googleusercontent.com',
//   scope: 'openid profile email',
//   responseType: 'code'
// }
// @Injectable({
//   providedIn: 'root'
// })
// export class GoogleApiService {

//   constructor(private readonly oAuthService: OAuthService) {
//     oAuthService.configure(oAuthconfig)
//     oAuthService.loadDiscoveryDocument().then( () =>{
//       oAuthService.tryLoginImplicitFlow().then( ()=>{
//         if (!oAuthService.hasValidAccessToken()){
//           oAuthService.initLoginFlow()
//         } else{
//           oAuthService.loadUserProfile().then( (userProfile)=>{
//             console.log(JSON.stringify(userProfile))
//           })
//         }
//       })
//     })
//    }
// }

import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

const oAuthconfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: 'http://localhost:4200',
  clientId:'488364931693-j4obtalt2tbl5f8plcpic9jfi3trmhkr.apps.googleusercontent.com',
  scope: 'openid profile email',
  responseType: 'code'
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(oAuthconfig)
    oAuthService.loadDiscoveryDocument().then(() => {
      oAuthService.tryLoginImplicitFlow().then(() => {
        if (!oAuthService.hasValidAccessToken()) {
          oAuthService.initLoginFlow()
        } else {
          oAuthService.loadUserProfile().then((userProfile) => {
            console.log(JSON.stringify(userProfile))
          }, (error) => {
            console.error('Failed to load user profile:', error);
          })
        }
      }, (error) => {
        console.error('Failed to perform implicit login flow:', error);
      })
    }, (error) => {
      console.error('Failed to load discovery document:', error);
    })
   }
}

