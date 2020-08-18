import { Component, OnDestroy, OnInit} from '@angular/core';
import { interval } from 'rxjs';

import { MyUtilsService } from '../my-utils.service';

@Component({
  selector: 'app-enemies',
  templateUrl: './enemies.component.html',
  styleUrls: ['./enemies.component.css']
})
export class EnemiesComponent implements OnInit, OnDestroy {
  enemies = [];

  enemyGenerator = interval(1500)
    .subscribe(() => {
      const direction = this.myUtilsService.getRandomInt(2) ? 'right' : 'left';
      this.enemies.push({
        direction: direction,
        posX: direction === 'right' ? 0 : 100,
        posY: this.myUtilsService.getRandomInt(90) + 5
      });
    });

  move = interval(150)
    .subscribe(() => {
      console.log(this.enemies.length, this.enemies);
      this.enemies.map(enemy => enemy.posX += enemy.direction === 'right' ? 1 : -1);
      this.enemies = this.enemies.filter(enemy => 0 <= enemy.posX && enemy.posX <= 100);
    });

  constructor(
    private myUtilsService: MyUtilsService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.move.unsubscribe();
    this.enemyGenerator.unsubscribe();
  }

}
