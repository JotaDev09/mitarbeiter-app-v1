import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HeaderModule } from '../header/header.module';
import { HomePageRoutingModule } from './home-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    HeaderModule,
    FullCalendarModule,
    MatIconModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
