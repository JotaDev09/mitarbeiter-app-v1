import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

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
  stillHolidays: number = 28;
  notes: string = '';
  dateRequest: string = '';
  placeholderValue: string = '';
  minHolidaysTo: string = '';
  floatContainer: boolean = false;

  constructor(private sharedService: SharedService, private router: Router) {
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

  /**
   * The user can only select the current year or the next year
   */
  onYearChange() {
    const nextYearDate = new Date(this.nextYear, 11, 31); // Fecha del 31 de diciembre del próximo año
    this.maxOptionHolidays = `${nextYearDate.getFullYear()}-${(
      nextYearDate.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}-${nextYearDate.getDate().toString().padStart(2, '0')}`;

    if (this.actualYear == this.nextYear) {
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
      this.minHolidaysTo = this.optHolidays;
      this.maxOptionHolidays = `${this.year}-12-31`;
    }
  }

  /**
   * The user sends the holidays request
   * @param holidaysForm the form with the holidays data
   */
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
      this.saveHolidaysLocalStorage(holidayData);
      this.holidaysFrom = '';
      this.holidaysTo = '';
      this.notes = '';
      setTimeout(() => {
        this.floatContainer = true;
      }, 300);
      setTimeout(() => {
        this.floatContainer = false;
        this.router.navigate(['/holidays-resum']);
      }, 1300);
    }
  }

  saveHolidaysLocalStorage(holidayData: any) {
    const holidays = JSON.parse(localStorage.getItem('holidays') || '[]');
    holidays.push(holidayData);
    localStorage.setItem('holidays', JSON.stringify(holidays));
  }

  /**
   * The user can only select the current day or a day after
   */
  habilityCalendarOption() {
    this.optHolidays = this.today.toISOString().substring(0, 10);
  }

  /**
   * The function calculates the remaining holidays
   */
  calculateRemainingHolidays() {
    if (this.holidaysFrom && this.holidaysTo) {
      const startDate = new Date(this.holidaysFrom).getTime();
      const endDate = new Date(this.holidaysTo).getTime();
      const daysDifference = Math.round(
        (endDate - startDate) / (1000 * 60 * 60 * 24)
      );

      const adjustedDaysDifference =
        daysDifference - Math.floor(daysDifference / 7) * 2;

      this.stillHolidays = 28 - adjustedDaysDifference;
      console.log(adjustedDaysDifference);
    }
  }

  /**
   * The function set settings in notes
   */
  setNotes(notes: string) {
    this.notes = this.capitalizeFirstLetter(notes);
  }

  /**
   * The function set the text in capital letter
   */
  capitalizeFirstLetter(text: string): string {
    if (text.length === 0) {
      return text;
    }
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
