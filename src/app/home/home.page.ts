import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from '../shared.service';
import { AlertLicenseComponent } from 'src/app/dialogs/alert-license/alert-license.component';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import * as moment from 'moment';
import 'moment/locale/de';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit {
  greeting: string[] = ['Guten Morgen', 'Guten Tag', 'Guten Abend'];
  currentGreeting: string = '';
  name: string = 'Man Mustermann';
  today = this.formatDate(new Date());
  tomorrow = this.formatDate(this.getTomorrow());
  userData = this.sharedService.getUserLocalStorage();
  carLicense = '';
  ambulanceLicense = '';
  noCarLicense: boolean = true;
  noAmbulanceLicense: boolean = true;
  isCarLicenseExpirationOneMonth: boolean = false;
  isCarLicenseExpirationThreeMonths: boolean = false;
  isAmbulanceLicenseExpirationOneMonth: boolean = false;
  isAmbulanceLicenseExpirationThreeMonths: boolean = false;

  constructor(private dialog: MatDialog, private sharedService: SharedService) {
    this.greetings();
    this.sharedService.updateTitle('Startseite');
    this.licenseDates();
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.checkAmbulanceLicense();
    //   this.checkDriverLicense();
    // }, 1000);
  }

  calendarOptions: CalendarOptions = {
    locale: 'de',
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    headerToolbar: {
      left: '',
      center: 'title',
      right: '',
    },
    firstDay: 1,
    dayHeaderFormat: {
      weekday: 'short',
    },
  };

  /**
   * The function is used to gets the datum of the ambulance license
   */
  checkAmbulanceLicense() {
    this.checkLicense('P-Schein', 'ambulanceLicense', 'ambulanceTitle');
  }

  /**
   * The function is used to gets the datum of the driver license
   */
  checkDriverLicense() {
    this.checkLicense('Führerschein', 'driverLicense', 'driverTitle');
  }

  /**
   * The function is used to check the expiration date of the license
   * @param type The type of the license
   * @param licenseDateKey The key of the license date
   * @param titleKey The key of the title
   */
  checkLicense(type: string, licenseDateKey: string, titleKey: string) {
    const userData = this.sharedService.getUserLocalStorage();

    if (userData) {
      const expirationDate = new Date(userData[licenseDateKey]);
      const today = new Date();
      const timeDiff = expirationDate.getTime() - today.getTime();
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      const diffMonths = Math.floor(diffDays / 30);
      const remainingDays = diffDays % 30;

      if (diffDays <= 30 || diffMonths <= 2) {
        this.dialog.open(AlertLicenseComponent, {
          data: {
            message:
              diffDays <= 30
                ? `Dein ${type} läuft in ${diffDays} Tagen ab! Bitte verlängert ihn so schnell wie möglich!`
                : `Dein ${type} läuft in ${diffMonths} Monate und ${remainingDays} Tage ab!`,
          },
        });
      }
    }
  }

  /**
   * The function is used to get the license dates
   */
  licenseDates() {
    const userData = this.sharedService.getUserLocalStorage();
    moment.locale('de');

    if (userData) {
      const today = moment();
      const carLicenseDate = moment(userData.driverLicense);
      const ambulanceLicenseDate = moment(userData.ambulanceLicense);

      this.carLicense = carLicenseDate.format('LL');
      if (this.carLicense === 'Invalid date') {
        this.noCarLicense = false;
      }

      this.ambulanceLicense = ambulanceLicenseDate.format('LL');
      if (this.ambulanceLicense === 'Invalid date') {
        this.noAmbulanceLicense = false;
      }

      this.changeColorAdvice(today, carLicenseDate, ambulanceLicenseDate);
    }
  }

  /**
   * The function is used to change the color of the advice
   * @param today The current date
   * @param carLicenseDate The date of the car license
   * @param ambulanceLicenseDate The date of the ambulance license
   */
  changeColorAdvice(
    today: moment.Moment,
    carLicenseDate: moment.Moment,
    ambulanceLicenseDate: moment.Moment
  ) {
    const oneMonthLater = today.clone().add(1, 'month');
    const threeMonthsLater = today.clone().add(3, 'month');

    this.isCarLicenseExpirationOneMonth =
      carLicenseDate.isBefore(oneMonthLater);
    this.isCarLicenseExpirationThreeMonths = carLicenseDate.isBetween(
      oneMonthLater,
      threeMonthsLater
    );

    this.isAmbulanceLicenseExpirationOneMonth =
      ambulanceLicenseDate.isBefore(oneMonthLater);
    this.isAmbulanceLicenseExpirationThreeMonths =
      ambulanceLicenseDate.isBetween(oneMonthLater, threeMonthsLater);
  }

  /**
   * The function is used to get the current greeting
   */
  greetings() {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      this.currentGreeting = this.greeting[0];
    } else if (currentHour >= 12 && currentHour < 18) {
      this.currentGreeting = this.greeting[1];
    } else {
      this.currentGreeting = this.greeting[2];
    }
    this.name = this.sharedService.getUserLocalStorage().name;
  }

  /**
   * The function is used to get the date of tomorrow
   * @returns Date
   */
  private getTomorrow(): Date {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  }

  /**
   * The function is used to format the date
   * @param date The date to be formatted
   * @returns string
   */
  private formatDate(date: Date): string {
    const months = [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'July',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
    ];

    const day = date.getDate().toString().padStart(2, '0');
    const month = date.getMonth();
    const monthName = months[month];
    const year = date.getFullYear().toString();

    return `${day}, ${monthName} ${year}`;
  }
}
