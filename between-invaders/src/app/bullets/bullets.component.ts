import { Component, OnDestroy, OnInit} from '@angular/core';

import { interval } from 'rxjs';

import { ShootingService } from '../shooting.service';

@Component({
  selector: 'app-bullets',
  templateUrl: './bullets.component.html',
  styleUrls: ['./bullets.component.css']
})
export class BulletsComponent implements OnInit, OnDestroy {
  bullets = [];

  subscription;
  move = interval(50)
    .subscribe(() => {
      // console.log(this.bullets.length, this.bullets);
      this.bullets.map(bullet => bullet.posX += bullet.direction === 'right' ? 1 : -1);
      this.bullets = this.bullets.filter(bullet => 0 <= bullet.posX && bullet.posX <= 100);
    });

  constructor(
    private shootingService: ShootingService
  ) { }

  ngOnInit(): void {
     this.subscription = this.shootingService.bullets$
       .subscribe(data => {
         if (data) {
           this.bullets.push(data);
         }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.move.unsubscribe();
  }

}
