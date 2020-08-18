import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyUtilsService {

  constructor() { }

  getRandomInt(max): number { // random number from range [0, max)
    return Math.floor(Math.random() * Math.floor(max));
  }
}
