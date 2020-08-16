import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  shipPosition = 50;

  constructor( ) { }

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
}
