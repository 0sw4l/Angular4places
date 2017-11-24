import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapaComponent } from './mapa/mapa.component';
import { MainComponent } from './main/main.component';
import { LugaresComponent } from './lugares/lugares.component';


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    MainComponent,
    LugaresComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
