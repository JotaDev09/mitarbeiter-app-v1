import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-holidays-resum',
  templateUrl: './holidays-resum.page.html',
  styleUrls: ['./holidays-resum.page.scss'],
})
export class HolidaysResumPage implements OnInit {
  holidays: any = [];
  editHolidays: boolean = false;
  dateRequest: string = '';
  minDate = this.sharedService.minDate;
  editedHolidaysFrom: string = '';
  editedHolidaysTo: string = '';
  i: any;
  optHolidays: string = '';
  maxOptionHolidays: string = '';
  currentMonth = new Date().getMonth() + 1;
  showNextYearOption: boolean = false;
  nextYear = this.sharedService.year + 1;
  holidaysFrom: string = '';
  holidaysTo: string = '';
  editHolidaysFrom: string = '';
  currentEditIndex: number | null = null;
  holidayIndex: number | null = null;
  yearGroupIndex: number | null = null;
  currentEditingId: string | null = null;

  status = [
    { name: 'approved', icon: 'assets/icons/status-tick.png' },
    { name: 'waiting', icon: '/assets/icons/status-wait.png' },
    { name: 'rejected', icon: 'assets/icons/status-cancel.png' },
  ];

  constructor(private sharedService: SharedService) {
    this.sharedService.updateTitle('Dienstplan');
  }

  ngOnInit() {
    this.getHolidaysFromLocalStorage();
    this.habilityCalendarOption();
    this.habilityNextYearOption();
  }

  habilityCalendarOption() {
    this.optHolidays = this.sharedService.today.toISOString().substring(0, 10);
  }

  habilityNextYearOption() {
    if (this.currentMonth >= 10) {
      this.showNextYearOption = true;
      this.maxOptionHolidays = `${this.nextYear}-12-31`;
    }
    this.maxOptionHolidays = `${this.sharedService.year}-12-31`;
  }

  getStatusIcon(status: any) {
    const statusObj = this.status.find((s) => s.name === status);
    return statusObj ? statusObj.icon : '';
  }

  getHolidaysFromLocalStorage() {
    const userDataJSON = localStorage.getItem('user');
    if (userDataJSON) {
      const userData = JSON.parse(userDataJSON);
      const holidays = userData.holidays || [];
      console.log(holidays);
      const groupedHolidaysData = this.groupedHolidays(holidays);
      return groupedHolidaysData;
    }
    return [];
  }

  groupedHolidays(holidays: any[]) {
    const groupedHolidays: { [year: string]: any[] } = holidays.reduce(
      (acc: { [year: string]: any[] }, holiday: any) => {
        const year = holiday.year.toString();

        if (!acc[year]) {
          acc[year] = [];
        }

        holiday.isEditing = false;

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

  // Modifica el método editHolidaysButton
  editHolidaysButton(id: string) {
    console.log(id);
    this.currentEditingId = id;
    this.editHolidays = true;
  }

  requestHolidaysChange() {
    // this.holidays.holidaysFrom = this.editedHolidaysFrom;
    // this.holidays.holidaysTo = this.editedHolidaysTo;
    // const holidays = JSON.parse(localStorage.getItem('holidays') || '[]');
    // holidays.push(holidayData);
    // localStorage.setItem('holidays', JSON.stringify(holidays));
  }

  requestHolidaysCancel() {
    this.editHolidays = false;
  }

  cancelHolidays(id: string) {
    this.currentEditingId = id;
    this.editHolidays = false;
  }
}
