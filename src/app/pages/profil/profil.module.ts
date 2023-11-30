import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfilPageRoutingModule } from './profil-routing.module';

import { ProfilPage } from './profil.page';
import { HeaderModule } from 'src/app/header/header.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfilPageRoutingModule,
    HeaderModule,
    MatIconModule,
  ],
  declarations: [ProfilPage],
})
export class ProfilPageModule {}
