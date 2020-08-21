import { Component, OnInit } from '@angular/core';
import { HostListener, EventEmitter } from '@angular/core';

import { ShootingService } from '../shooting.service';
import { CollisionService } from '../collision.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  shipPosition = 50;
  width = 4;
  height = 4;
  hWidth = this.width / 2;
  hHeight = this.height / 2;

  constructor(
    private shootingService: ShootingService,
    private collisionService: CollisionService,
  ) { }

  ngOnInit(): void {
    this.collisionService.setPlayerCoordinatesX(50 - this.hWidth, 50 + this.hWidth);
    this.collisionService.setPlayerCoordinatesY(this.shipPosition - this.hHeight, this.shipPosition + this.hHeight);
  }

  getPosition(): string {
    return `${this.shipPosition}%`;
  }

  @HostListener('window:keydown.arrowDown') moveDown(): void {
    this.shipPosition = Math.min(this.shipPosition + 2, 98);
    this.collisionService.setPlayerCoordinatesY(this.shipPosition - this.hHeight, this.shipPosition + this.hHeight);
  }

  @HostListener('window:keydown.arrowUp') moveUp(): void {
    this.shipPosition = Math.max(this.shipPosition - 2, 2);
    this.collisionService.setPlayerCoordinatesY(this.shipPosition - this.hHeight, this.shipPosition + this.hHeight);
  }

  @HostListener('window:keydown.arrowLeft') leftShow(): void {
    this.shootingService.shoot({direction: 'left', posY: this.shipPosition, posX: 50});
  }

  @HostListener('window:keydown.arrowRight') rightShow(): void {
    this.shootingService.shoot({direction: 'right', posY: this.shipPosition, posX: 50});
  }
}
