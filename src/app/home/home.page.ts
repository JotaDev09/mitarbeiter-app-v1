import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewDienstComponent } from '../view-dienst/view-dienst.component';
import { MatDialog } from '@angular/material/dialog';

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
  nextWeek: string[] = [];
  wagen: string = 'GO 335';
  driver: string = 'Fahrer';
  sani: string = 'Rettungssanitäter';
  data: any;
  relax: string = 'Ruhetag';

  constructor(private router: Router, private dialog: MatDialog) {
    this.getDate();
    this.isToday('01/01/21');
    this.greetings();
  }

  ngOnInit() {}

  /**
   * The function is used to sign out the user and redirect to login page
   */
  signOut() {
    //implement sign out functionality here
    this.router.navigate(['/login']);
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
    for (let i = 0; i < 7; i++) {
      today.setDate(today.getDate() + 1); // Avanza al siguiente día
      const day = today.getDate().toString().padStart(2, '0');
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const year = today.getFullYear().toString().slice(-2);

      this.nextWeek.push(`${day}/${month}/${year}`);
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
    day: any,
    wagen: string,
    driver: string,
    sani: string,
    relax: string
  ) {
    const dialogRef = this.dialog.open(ViewDienstComponent, {
      data: {
        day,
        wagen,
        driver,
        sani,
        relax,
        isToday: this.isToday(day),
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Data recibida en ViewDienstComponent:', result);
    });
  }
}