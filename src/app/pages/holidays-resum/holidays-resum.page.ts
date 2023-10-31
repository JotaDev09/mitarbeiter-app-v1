import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-holidays-resum',
  templateUrl: './holidays-resum.page.html',
  styleUrls: ['./holidays-resum.page.scss'],
})
export class HolidaysResumPage implements OnInit {
  holidays: any = [];
  constructor(private sharedService: SharedService) {
    this.sharedService.updateTitle('Dienstplan');
  }

  ngOnInit() {
    this.getHolidaysFromLocalStorage();
  }

  getHolidaysFromLocalStorage() {
    const holidaysJSON = localStorage.getItem('holidays');
    const holidays = holidaysJSON ? JSON.parse(holidaysJSON) : [];

    const groupedHolidays: { [year: string]: any[] } = holidays.reduce(
      (acc: { [year: string]: any[] }, holiday: any) => {
        const year = holiday.year.toString();

        if (!acc[year]) {
          acc[year] = [];
        }

        acc[year].push(holiday);
        return acc;
      },
      {}
    );

    return Object.keys(groupedHolidays).map((year) => ({
      year: year,
      holidays: groupedHolidays[year].sort((a: any, b: any) => {
        return (
          new Date(a.holidaysFrom).getTime() -
          new Date(b.holidaysFrom).getTime()
        );
      }),
    }));
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
