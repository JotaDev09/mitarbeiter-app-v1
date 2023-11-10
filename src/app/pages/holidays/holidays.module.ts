import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HolidaysPageRoutingModule } from './holidays-routing.module';

import { HolidaysPage } from './holidays.page';
import { HeaderModule } from 'src/app/header/header.module';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HolidaysPageRoutingModule,
    HeaderModule,
    MatSelectModule,
  ],
  declarations: [HolidaysPage],
})
export class HolidaysPageModule {}
