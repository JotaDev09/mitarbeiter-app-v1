import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DatenschutzPageRoutingModule } from './datenschutz-routing.module';

import { DatenschutzPage } from './datenschutz.page';

@NgModule({
  imports: [CommonModule, FormsModule, DatenschutzPageRoutingModule],
  declarations: [DatenschutzPage],
})
export class DatenschutzPageModule {}
