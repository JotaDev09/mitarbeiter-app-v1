import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { LoginComponent } from './pages/login/login.component';
import { InformationComponent } from './pages/information/information.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { HolidaysResumComponent } from './pages/holidays-resum/holidays-resum.component';
import { HolidaysComponent } from './pages/holidays/holidays.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { ServiceScheduleComponent } from './pages/service-schedule/service-schedule.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { WorkshopRequestComponent } from './pages/workshop-request/workshop-request.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
  },
  {
    path: 'datenschutz',
    component: PrivacyComponent,
  },
  {
    path: 'holidays',
    component: HolidaysComponent,
  },
  {
    path: 'holidays-resum',
    component: HolidaysResumComponent,
  },
  {
    path: 'werkstattanfrage',
    component: WorkshopRequestComponent,
  },
  {
    path: 'information',
    component: InformationComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: 'profil',
    component: ProfilComponent,
  },
  {
    path: 'documents',
    component: DocumentsComponent,
  },
  {
    path: 'dienstplan',
    component: ServiceScheduleComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
