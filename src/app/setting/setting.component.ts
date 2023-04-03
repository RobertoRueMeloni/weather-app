import { Component } from '@angular/core';
import axios from 'axios';
import { OAuthService } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  weatherApiUrl: string = '';
  apiKey: string = '';
  name: string = '';

  constructor(private readonly oAuthService: OAuthService) {}
  onSubmit() {
    // OAuthService.loadUserProfile().then((userProfile) => {
    const data = {
      weatherApiUrl: this.weatherApiUrl,
      apiKey: this.apiKey,
      name: this.name
    };
    console.log(this.oAuthService);

    axios.post('http://localhost:3000/api/settings', data)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }
}
// }
