import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DienstplanPage } from './dienstplan.page';

const routes: Routes = [
  {
    path: '',
    component: DienstplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DienstplanPageRoutingModule {}
