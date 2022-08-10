import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuzzyqueryService {

  constructor() { }
  filter = (obj: any, value: any) => {
    const result = obj.filter((item) => {
      if (item.name.includes(value)) {
        return item;
      }
    });
    return result;
  }
}
