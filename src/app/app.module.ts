import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaModel } from './shared/area.model';
import { Floor3Component } from './floor3/floor3.component';

@NgModule({
  declarations: [
    AppComponent,
    Floor3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AreaModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
