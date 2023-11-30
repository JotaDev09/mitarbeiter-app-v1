import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InformationPageRoutingModule } from './information-routing.module';

import { InformationPage } from './information.page';
import { HeaderModule } from 'src/app/header/header.module';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InformationPageRoutingModule,
    HeaderModule,
    MatExpansionModule,
  ],
  declarations: [InformationPage],
})
export class InformationPageModule {}
