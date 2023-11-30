import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DienstplanPageRoutingModule } from './dienstplan-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HeaderModule } from 'src/app/header/header.module';
import { DienstplanPage } from './dienstplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DienstplanPageRoutingModule,
    MatMenuModule,
    MatButtonModule,
    HeaderModule,
  ],
  declarations: [DienstplanPage],
})
export class DienstplanPageModule {}
