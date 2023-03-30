import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  weatherApiUrl: string = '';
  apiKey: string = '';
  name: string = '';

  onSubmit() {
    const data = {
      weatherApiUrl: this.weatherApiUrl,
      apiKey: this.apiKey,
      name: this.name
    };

    axios.post('http://localhost:3000/api/settings', data)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }
}
