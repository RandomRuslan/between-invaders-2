import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { BulletsComponent } from './bullets/bullets.component';
import { BulletComponent } from './bullet/bullet.component';
import { EnemiesComponent } from './enemies/enemies.component';
import { EnemyComponent } from './enemy/enemy.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    BulletsComponent,
    BulletComponent,
    EnemiesComponent,
    EnemyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
