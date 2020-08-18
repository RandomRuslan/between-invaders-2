import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.css']
})
export class BulletComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  getPositionY(): string {
    return `${this.data.posY}%`;
  }

  getPositionX(): string {
    return `${this.data.posX}%`;
  }
}
