import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PilotaComponent } from './pilota/pilota.component';
import {HttpClientModule} from '@angular/common/http';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';




@NgModule({
  declarations: [
    AppComponent,
    PilotaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule, ButtonModule, RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
