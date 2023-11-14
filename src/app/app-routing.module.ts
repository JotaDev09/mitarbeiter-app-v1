import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'impressum',
    loadChildren: () =>
      import('./pages/impressum/impressum.module').then(
        (m) => m.ImpressumPageModule
      ),
  },
  {
    path: 'datenschutz',
    loadChildren: () =>
      import('./pages/datenschutz/datenschutz.module').then(
        (m) => m.DatenschutzPageModule
      ),
  },
  {
    path: 'holidays',
    loadChildren: () =>
      import('./pages/holidays/holidays.module').then(
        (m) => m.HolidaysPageModule
      ),
  },
  {
    path: 'holidays-resum',
    loadChildren: () =>
      import('./pages/holidays-resum/holidays-resum.module').then(
        (m) => m.HolidaysResumPageModule
      ),
  },
  {
    path: 'information',
    loadChildren: () =>
      import('./pages/information/information.module').then(
        (m) => m.InformationPageModule
      ),
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
