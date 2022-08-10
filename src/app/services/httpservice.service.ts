import { Injectable } from '@angular/core';

// 引入axios
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor() { }

  // 封装axios
  axiosGet(api: any) {
    return new Promise((resolve, reject) => {
      axios.get(api)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  axiospost(api: any, params: any) {
    return new Promise((resolve, reject) => {
      axios.get(api, params)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}
