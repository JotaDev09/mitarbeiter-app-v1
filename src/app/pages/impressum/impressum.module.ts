import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ImpressumPageRoutingModule } from './impressum-routing.module';

import { ImpressumPage } from './impressum.page';

@NgModule({
  imports: [CommonModule, FormsModule, ImpressumPageRoutingModule],
  declarations: [ImpressumPage],
})
export class ImpressumPageModule {}
