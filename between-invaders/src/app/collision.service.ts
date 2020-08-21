import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollisionService {
  playerCoordinates = {
    xLeft: null,
    xRight: null,
    yTop: null,
    yBottom: null,
  };

  constructor() { }

  setPlayerCoordinatesX(left: number, right: number): void {
    this.playerCoordinates.xLeft = left;
    this.playerCoordinates.xRight = right;
  }

  setPlayerCoordinatesY(top: number, bottom: number): void {
    this.playerCoordinates.yTop = top;
    this.playerCoordinates.yBottom = bottom;
  }

  checkPlayerEnemyCrash(enemy: any): boolean {
    if (this.playerCoordinates.xLeft > enemy.right || this.playerCoordinates.xRight < enemy.left) {
      return false;
    }

    if (this.playerCoordinates.yBottom < enemy.top || this.playerCoordinates.yTop > enemy.bottom) {
      return false;
    }

    return true;
  }
}
