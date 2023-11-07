import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  monthSelect: any[] = [];
  dateSelect: any;
  dateValue: any;

  week: any = [
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
    'Sonntag',
  ];

  constructor(private sharedService: SharedService, private router: Router) {
    this.sharedService.updateTitle('Kalender');
  }

  ngOnInit(): void {
    this.getDaysFromDate(11, 2023);
  }

  getDaysFromDate(month: any, year: any) {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);
    this.dateSelect = startDate;

    const diffDays =
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
    const numberDays = Math.round(diffDays);

    const arrayDays = [...Array(numberDays)].map((_, index) => {
      const day = index + 1;
      const dayObject = new Date(year, month - 1, day);
      return {
        name: this.week[dayObject.getDay()],
        value: day,
        indexWeek: dayObject.getDay(),
      };
    });

    this.monthSelect = arrayDays;
  }

  changeMonth(flag: any) {
    const currentYear = this.dateSelect.getFullYear();
    const currentMonth = this.dateSelect.getMonth();
    const newDate = new Date(currentYear, currentMonth + flag, 1);
    this.getDaysFromDate(newDate.getMonth() + 1, newDate.getFullYear());
  }

  clickDay(day: any) {
    const monthYear = this.dateSelect.format('YYYY-MM');
    const parse = `${monthYear}-${day.value}`;
    const objectDate = new Date(parse);

    // If you need to format the date as a string, you can use the following:
    this.dateValue = {
      value: objectDate,
      formatted: this.formatDate(objectDate),
    };
  }

  formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  }
}
