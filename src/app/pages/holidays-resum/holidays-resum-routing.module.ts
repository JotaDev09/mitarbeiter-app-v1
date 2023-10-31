import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolidaysResumPage } from './holidays-resum.page';

const routes: Routes = [
  {
    path: '',
    component: HolidaysResumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolidaysResumPageRoutingModule {}
