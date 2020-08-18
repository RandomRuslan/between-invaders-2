import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShootingService {
  bullets$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);

  constructor() { }

  shoot(data: any): void {
    this.bullets$.next(data);
  }
}
