

import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-weathermap',
  templateUrl: './weathermap.component.html',
  styleUrls: ['./weathermap.component.css']
})
export class WeathermapComponent {
  city = '';
  weatherData: string  = '';

  ngOnInit() {
    this.getApiKey();
  }

  getApiKey() {
    axios.get('http://localhost:3000/api/setting/1')
      .then(response => {
        console.log(response)
        this.getWeather(response.data.apiKey, response.data.weatherApiUrl);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getWeather(apiKey: string, weatherApiUrl: string) {
    // const url = `${weatherApiUrl}?access_key=${apiKey}&query=${this.city}`;
    const url = `${weatherApiUrl}?q=${this.city}&appid=${apiKey}`;
    console.log('here is the url' + url)
    axios.get(url)
      .then(response => {
        console.log(response.data.main)
        this.weatherData = response.data.main.temp;
      })
      .catch(error => {
        console.log(error);
      });

  //   const params = {
  //     access_key: '6418f2cb29c354057783a893ea3649b3',
  //     query: 'New York'
  //   }
    
  //   axios.get('https://api.openweathermap.org/data/2.5/weather?q=', {params})
  //     .then(response => {
  //       const apiResponse = response.data;
  //       console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
  //     }).catch(error => {
  //       console.log(error);
  //     });
  }
}