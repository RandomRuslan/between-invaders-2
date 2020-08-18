import { Component, OnInit } from '@angular/core';
import { HostListener, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

import { ShootingService } from '../shooting.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  shipPosition = 50;

  constructor(
    private shootingService: ShootingService
  ) { }

  ngOnInit(): void {
  }

  getPosition(): string {
    return `${this.shipPosition}%`;
  }

  @HostListener('window:keydown.arrowDown') moveDown(): void {
    this.shipPosition = Math.min(this.shipPosition + 2, 98);
  }

  @HostListener('window:keydown.arrowUp') moveUp(): void {
    this.shipPosition = Math.max(this.shipPosition - 2, 2);
  }

  @HostListener('window:keydown.arrowLeft') leftShow(): void {
    this.shootingService.shoot({direction: 'left', posY: this.shipPosition, posX: 50});
  }

  @HostListener('window:keydown.arrowRight') rightShow(): void {
    this.shootingService.shoot({direction: 'right', posY: this.shipPosition, posX: 50});
  }
}
