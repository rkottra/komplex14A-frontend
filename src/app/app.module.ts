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
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PilotaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule, ButtonModule, RippleModule,
    DialogModule,ConfirmDialogModule, InputTextModule,
    InputNumberModule, DropdownModule, CalendarModule
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
