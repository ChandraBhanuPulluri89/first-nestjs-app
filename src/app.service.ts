import { Injectable } from '@nestjs/common'; 
import axios from 'axios';
import { Response } from 'express';
@Injectable()
export class AppService { 
  getHello(): string {
    return 'Hello World!';
  }

  postInfo(): string{
    return 'Post Request Served!';
  }

 getEdinburghWeather(){
  const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=55.9533&lon=3.1883&exclude=hourly,daily&appid=41105062d4354a77429f7dcf31a13b74';
  return axios.request({
    method: 'get',
    url: url, 
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
}).then((response) => {
 return response.data;
});
}
}
