import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.page.html',
  styleUrls: ['./holidays.page.scss'],
})
export class HolidaysPage implements OnInit {
  today = new Date();
  day = this.today.getDate();
  month = this.today.getMonth() + 1;
  year = new Date().getFullYear();
  minDate = `${this.day}/${this.month}/${this.year}`;
  nextYear = this.year + 1;
  currentMonth = new Date().getMonth() + 1;
  showNextYearOption: boolean = false;
  name: string = 'Man';
  lastname: string = 'Mustermann';
  optHolidays: string = '';
  maxOptionHolidays: string = '';
  actualYear = this.year;
  proxYear: string = '';
  lastNameWorker: string = '';
  nameWorker: string = '';
  holidaysFrom: string = '';
  holidaysTo: string = '';
  stillHolidays: number = 20;
  notes: string = '';
  dateRequest: string = '';
  placeholderValue: string = '';
  minHolidaysTo: string = '';

  constructor(private sharedService: SharedService) {
    this.sharedService.updateTitle('UrlaubsAntrag');
  }

  ngOnInit(): void {
    this.habilityNextYearOption();
    this.habilityCalendarOption();
  }

  /**
   * Check if the current month is greater than 10 (October)
   */
  habilityNextYearOption() {
    if (this.currentMonth >= 10) {
      this.showNextYearOption = true;
      this.maxOptionHolidays = `${this.nextYear}-12-31`;
    }
    this.maxOptionHolidays = `${this.year}-12-31`;
  }

  onYearChange() {
    if (this.actualYear == this.nextYear) {
      console.log('next year');
      const nextYearDate = new Date(this.nextYear, 0, 1);

      this.minHolidaysTo = `${nextYearDate.getFullYear()}-${(
        nextYearDate.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}-${nextYearDate
        .getDate()
        .toString()
        .padStart(2, '0')}`;
    } else {
      console.log('actual year');
      this.minHolidaysTo = this.optHolidays;
    }
  }

  sendHolidays(holidaysForm: any) {
    if (holidaysForm.valid) {
      const holidayData = {
        year: this.actualYear,
        lastName: this.lastname,
        name: this.name,
        holidaysFrom: this.holidaysFrom,
        holidaysTo: this.holidaysTo,
        stillHolidays: this.stillHolidays,
        notes: this.notes,
        dateRequest: this.minDate,
      };

      console.log(holidayData);
    }
  }

  habilityCalendarOption() {
    this.optHolidays = this.today.toISOString().substring(0, 10);
  }
}
