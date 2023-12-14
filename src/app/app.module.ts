import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from 'src/app/pages/login/login.component';
import { ImpressumComponent } from 'src/app/pages/impressum/impressum.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { HeaderModule } from 'src/app/header/header.module';
import { HomeComponent } from 'src/app/home/home.component';
import { ServiceScheduleComponent } from './pages/service-schedule/service-schedule.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { HolidaysComponent } from './pages/holidays/holidays.component';
import { HolidaysResumComponent } from './pages/holidays-resum/holidays-resum.component';
import { WorkshopRequestComponent } from './pages/workshop-request/workshop-request.component';
import { InformationComponent } from 'src/app/pages/information/information.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { ProfilComponent } from './pages/profil/profil.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ViewDienstComponent } from './dialogs/view-dienst/view-dienst.component';
import { AlertEditDienstComponent } from './dialogs/alert-edit-dienst/alert-edit-dienst.component';
import { AlertLicenseComponent } from './dialogs/alert-license/alert-license.component';
import { ShowLicenseComponent } from './dialogs/show-license/show-license.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrivacyComponent,
    ImpressumComponent,
    HomeComponent,
    ServiceScheduleComponent,
    CalendarComponent,
    HolidaysComponent,
    HolidaysResumComponent,
    WorkshopRequestComponent,
    InformationComponent,
    DocumentsComponent,
    ProfilComponent,
    ViewDienstComponent,
    AlertEditDienstComponent,
    AlertLicenseComponent,
    ShowLicenseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressBarModule,
    FullCalendarModule,
    CommonModule,
    HeaderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
