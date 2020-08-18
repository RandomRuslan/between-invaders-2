import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { BulletsComponent } from './bullets/bullets.component';
import { BulletComponent } from './bullet/bullet.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    BulletsComponent,
    BulletComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
