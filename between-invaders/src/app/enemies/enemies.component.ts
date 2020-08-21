import { Component, OnDestroy, OnInit} from '@angular/core';
import { interval } from 'rxjs';

import { CollisionService } from '../collision.service';
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
        hWidth: 5 / 2,
        hHeight: 5 / 2,
        posX: direction === 'right' ? 0 : 100,
        posY: this.myUtilsService.getRandomInt(90) + 5
      });
    });

  move = interval(150)
    .subscribe(() => {
      // console.log(this.enemies.length, this.enemies);
      this.enemies.map(enemy => {
        enemy.posX += enemy.direction === 'right' ? 0.5 : -0.5;
      });

      const isCrash = this.enemies.map(this.getCoordinates)
        .some( enemyCoordinates => this.collisionService.checkPlayerEnemyCrash(enemyCoordinates));
      if (isCrash) {
        this.unsubscribeAll();
        return;
      }

      this.enemies = this.enemies.filter(enemy => 0 <= enemy.posX && enemy.posX <= 100);
    });

  constructor(
    private collisionService: CollisionService,
    private myUtilsService: MyUtilsService,
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  unsubscribeAll(): void {
    this.move.unsubscribe();
    this.enemyGenerator.unsubscribe();
  }

  getCoordinates(enemy: any): any {
    return {
      left: enemy.posX - enemy.hWidth,
      right: enemy.posX + enemy.hWidth,
      top: enemy.posY - enemy.hHeight,
      bottom: enemy.posY + enemy.hHeight,
    };
  }

}
