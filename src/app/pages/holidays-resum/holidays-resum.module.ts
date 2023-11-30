import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HolidaysResumPageRoutingModule } from './holidays-resum-routing.module';

import { HolidaysResumPage } from './holidays-resum.page';
import { HeaderModule } from 'src/app/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HolidaysResumPageRoutingModule,
    HeaderModule,
  ],
  declarations: [HolidaysResumPage],
})
export class HolidaysResumPageModule {}
