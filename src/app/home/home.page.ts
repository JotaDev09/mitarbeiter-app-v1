import { Component, OnInit } from '@angular/core';
import { ViewDienstComponent } from '../dialogs/view-dienst/view-dienst.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../shared.service';
import { AlertLicenseComponent } from '../dialogs/alert-license/alert-license.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  greeting: string[] = ['Guten Morgen', 'Guten Tag', 'Guten Abend'];
  currentGreeting: string = '';
  name: string = 'Man Mustermann';
  week: string[] = [];
  dienstNumber1: any = ['Dienst 01'];
  dienstNumber2: any = ['Dienst 02'];
  dienst1: string = '06:00 - 14:00';
  dienst2: string = '10:00 - 18:00';
  nextWeek: string[] = [];
  wagen: string = 'GO 335';
  driver: string = 'Fahrer';
  sani: string = 'Rettungssanitäter';
  data: any;
  relax: string = 'Ruhetag';
  showFiller = false;

  constructor(private dialog: MatDialog, private sharedService: SharedService) {
    this.getDate();
    this.isToday('01/01/21');
    this.greetings();
    this.sharedService.updateTitle('Dienstplan');
    console.log(this.sharedService.getUserLocalStorage());
  }

  ngOnInit() {
    setTimeout(() => {
      this.checkAmbulanceLicense();
      this.checkDriverLicense();
    }, 1000);
  }

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

  checkAmbulanceLicense() {
    this.checkLicense('P-Schein', 'ambulanceLicense', 'ambulanceTitle');
  }

  checkDriverLicense() {
    this.checkLicense('Führerschein', 'driverLicense', 'driverTitle');
  }

  /**
   * The function is used to get the current week
   */
  getDate() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    today.setDate(today.getDate() - today.getDay() + 1);

    this.getCurrentWeek(today);
    this.getNextWeek(today);
  }

  /**
   * Get the current week
   * @param today Date
   */
  getCurrentWeek(today: Date) {
    for (let i = 0; i < 7; i++) {
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const year = String(today.getFullYear()).slice(2);

      this.week.push(`${day}/${month}/${year}`);
      today.setDate(today.getDate() + 1);
    }
  }

  /**
   * Get the next week
   * @param today Date
   */
  getNextWeek(today: Date) {
    const currentDayOfWeek = today.getDay();
    const daysUntilNextMonday =
      1 - currentDayOfWeek + (currentDayOfWeek === 0 ? 7 : 0);

    today.setDate(today.getDate() + daysUntilNextMonday);

    for (let i = 0; i < 7; i++) {
      const day = today.getDate().toString().padStart(2, '0');
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const year = today.getFullYear().toString().slice(-2);

      this.nextWeek.push(`${day}/${month}/${year}`);
      today.setDate(today.getDate() + 1);
    }
  }

  /**
   * The function is used to check the date of the day
   * @param date
   * @returns boolean
   */
  isToday(date: string): boolean {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear().toString().slice(-2);
    const todayFormatted = `${day}/${month}/${year}`;

    return date === todayFormatted;
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
   * The function is used to truncate the name when it is too long
   * @param text is the name
   * @param maxLength is the max length of the name
   * @returns shortened name
   */
  truncateName(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }

  viewDienst(
    dienstNumber: string,
    day: any,
    dienst: string,
    wagen: string,
    driver: string,
    sani: string,
    relax: string
  ) {
    const dialogRef = this.dialog.open(ViewDienstComponent, {
      data: {
        dienstNumber,
        day,
        dienst,
        wagen,
        driver,
        sani,
        relax,
        isToday: this.isToday(day),
      },
    });
  }
}
