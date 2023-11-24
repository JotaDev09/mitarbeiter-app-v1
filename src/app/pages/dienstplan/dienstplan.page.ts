import { Component, OnInit } from '@angular/core';
import { ViewDienstComponent } from 'src/app/dialogs/view-dienst/view-dienst.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dienstplan',
  templateUrl: './dienstplan.page.html',
  styleUrls: ['./dienstplan.page.scss'],
})
export class DienstplanPage implements OnInit {
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
    this.sharedService.updateTitle('Dienstplan');
    console.log(this.sharedService.getUserLocalStorage());
  }

  ngOnInit() {}

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
