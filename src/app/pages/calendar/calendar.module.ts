import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';

import { CalendarPageRoutingModule } from './calendar-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';

import { CalendarPage } from './calendar.page';
import { HeaderModule } from 'src/app/header/header.module';
import { ViewDienstComponent } from 'src/app/dialogs/view-dienst/view-dienst.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalendarPageRoutingModule,
    HeaderModule,
    MatIconModule,
    FullCalendarModule,
    HttpClientModule,
  ],
  declarations: [CalendarPage, ViewDienstComponent],
})
export class CalendarPageModule {}
