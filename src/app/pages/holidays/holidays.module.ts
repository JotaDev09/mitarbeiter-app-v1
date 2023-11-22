import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HolidaysPageRoutingModule } from './holidays-routing.module';

import { HolidaysPage } from './holidays.page';
import { HeaderModule } from 'src/app/header/header.module';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HolidaysPageRoutingModule,
    HeaderModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  declarations: [HolidaysPage],
})
export class HolidaysPageModule {}
