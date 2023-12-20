import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from '../shared.service';
import { AlertLicenseComponent } from 'src/app/dialogs/alert-license/alert-license.component';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Router } from '@angular/router';
import { format } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  greeting: string[] = ['Guten Morgen', 'Guten Tag', 'Guten Abend'];
  currentGreeting: string = '';
  name: string = 'Man Mustermann';
  today = this.formatDate(new Date());
  tomorrow = this.formatDate(this.getTomorrow());
  userData = this.sharedService.getUserLocalStorage();
  driverLicense = '';
  ambulanceLicense = '';
  noCarLicense: boolean = true;
  noAmbulanceLicense: boolean = true;
  isCarLicenseExpirationOneMonth: boolean = false;
  isCarLicenseExpirationThreeMonths: boolean = false;
  isAmbulanceLicenseExpirationOneMonth: boolean = false;
  isAmbulanceLicenseExpirationThreeMonths: boolean = false;
  holidaysData: any[] = [];
  eventsData: any[] = [];
  instructions: string = '';
  driveLicenseAlmostExpired: boolean = false;

  constructor(
    private dialog: MatDialog,
    private sharedService: SharedService,
    private router: Router
  ) {
    this.greetings();
    this.sharedService.updateTitle('Startseite');
    this.licenseDates();
  }

  ngOnInit(): void {
    this.loadHolidaysData();
  }

  /**
   * The function loadHolidaysData() is a function that gets the holidays from the local storage
   */
  loadHolidaysData() {
    this.holidaysData = this.sharedService.getHolidaysFromLocalStorage();
    if (this.holidaysData && this.holidaysData.length > 0) {
      this.eventsData = [];
      for (let i = 0; i < this.holidaysData.length; i++) {
        const userHolidays = this.holidaysData[i].holidays;
        this.eventsData = this.eventsData.concat(
          userHolidays
            .map((holidays: any) => {
              const endDate = new Date(holidays.holidaysTo);
              const startDate = new Date(holidays.holidaysFrom);
              endDate.setDate(endDate.getDate() + 1);
              const status = holidays.status;
              if (status === 'requested') {
                return this.approved(holidays, endDate, startDate);
              } else {
                return null;
              }
            })
            .filter((event: any) => event !== null)
        );
      }
      this.initializeCalendar();
    }
  }

  /**
   * The function approved() is a function that returns the approved holidays
   * @param holidays the data of the holidays
   * @param endDate the end date of the holidays
   * @returns the approved holidays
   */
  approved(holidays: any, endDate: Date, startDate: Date) {
    return {
      start: format(startDate, 'yyyy-MM-dd'),
      end: format(endDate, 'yyyy-MM-dd'),
      display: 'background',
      backgroundColor: '#8dc8aa',
    };
  }

  /**
   * The function initializeCalendar() is a function that initialize the calendar with the events
   */
  initializeCalendar() {
    this.calendarOptions.eventSources = [
      (fetchInfo, successCallback) => {
        successCallback(this.eventsData);
      },
    ];
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
    events: [
      {
        start: '2023-12-02',
        end: '2023-12-02',
        display: 'background',
        backgroundColor: '#8dc8aa',
      },
    ],
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

    if (userData && userData.datesLicenses) {
      const today = new Date();

      if (userData.datesLicenses.driverLicense) {
        const carLicenseDate = new Date(userData.datesLicenses.driverLicense);
        this.driverLicense = format(carLicenseDate, 'PP');

        if (this.driverLicense === 'Invalid date') {
          this.noCarLicense = false;
        }
      } else {
        this.noCarLicense = false;
      }

      if (userData.datesLicenses.ambulanceLicense) {
        const ambulanceLicenseDate = new Date(
          userData.datesLicenses.ambulanceLicense
        );
        this.ambulanceLicense = format(ambulanceLicenseDate, 'PP');

        if (this.ambulanceLicense === 'Invalid date') {
          this.noAmbulanceLicense = false;
        }
      } else {
        this.noAmbulanceLicense = false;
      }

      this.changeColorAdvice(
        today,
        new Date(userData.datesLicenses.driverLicense),
        new Date(userData.datesLicenses.ambulanceLicense)
      );
      this.driveLicenseAlmostExpired = true;
      this.instructions = 'Was machen?';
    }
  }

  /**
   * The function is used to change the color of the advice
   * @param today The current date
   * @param carLicenseDate The date of the car license
   * @param ambulanceLicenseDate The date of the ambulance license
   */
  changeColorAdvice(
    today: Date,
    carLicenseDate: Date,
    ambulanceLicenseDate: Date
  ) {
    const fourMonthsLater = new Date(today);
    fourMonthsLater.setMonth(fourMonthsLater.getMonth() + 4);

    const sixMonthsLater = new Date(today);
    sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);

    this.isCarLicenseExpirationOneMonth = carLicenseDate < fourMonthsLater;
    this.isCarLicenseExpirationThreeMonths =
      carLicenseDate >= fourMonthsLater && carLicenseDate <= sixMonthsLater;

    this.isAmbulanceLicenseExpirationOneMonth =
      ambulanceLicenseDate < fourMonthsLater;
    this.isAmbulanceLicenseExpirationThreeMonths =
      ambulanceLicenseDate >= fourMonthsLater &&
      ambulanceLicenseDate <= sixMonthsLater;
  }

  /**
   * The function is used to navigate to the instructions page
   */
  instructionsRenovate() {
    this.router.navigate(['/information']);
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
    this.name = this.sharedService.getUserLocalStorage().privateDaten.name;
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

    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    };
    return new Intl.DateTimeFormat('de-DE', options).format(date);
  }
}
