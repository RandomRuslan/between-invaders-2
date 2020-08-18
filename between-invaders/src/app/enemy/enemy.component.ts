import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.css']
})
export class EnemyComponent implements OnInit {
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
