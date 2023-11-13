import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.page.html',
  styleUrls: ['./holidays.page.scss'],
})
export class HolidaysPage implements OnInit {
  id = this.sharedService.getId();
  minDate = this.sharedService.minDate;
  year = this.sharedService.year;
  nextYear = this.sharedService.year + 1;
  currentMonth = new Date().getMonth() + 1;
  showNextYearOption: boolean = false;
  name: string = this.sharedService.getUserLocalStorage().name;
  lastname: string = this.sharedService.getUserLocalStorage().lastname;
  optHolidays: string = '';
  maxOptionHolidays: string = '';
  actualYear = this.sharedService.year;
  proxYear: string = '';
  lastNameWorker: string = '';
  nameWorker: string = '';
  holidaysFrom: string = '';
  holidaysTo: string = '';
  stillHolidays: number =
    this.sharedService.getUserLocalStorage().stillHolidays;
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
    this.maxOptionHolidays = `${this.sharedService.year}-12-31`;
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
      this.maxOptionHolidays = `${this.sharedService.year}-12-31`;
    }
  }

  /**
   * The user sends the holidays request
   * @param holidaysForm the form with the holidays data
   */
  sendHolidays(holidaysForm: any) {
    if (holidaysForm.valid) {
      const usedDays = this.calculateRemainingHolidays();
      const holidayData = {
        id: this.id,
        year: this.actualYear,
        lastName: this.lastname,
        name: this.name,
        holidaysFrom: this.holidaysFrom,
        holidaysTo: this.holidaysTo,
        notes: this.notes,
        dateRequest: this.sharedService.minDate,
        status: 'waiting',
        holidaysused: usedDays,
      };

      this.sharedService.updateStillHolidaysLocalStorage(this.stillHolidays);
      this.sharedService.saveHolidaysLocalStorage(holidayData);
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

  /**
   * The user can only select the current day or a day after
   */
  habilityCalendarOption() {
    const today = this.sharedService.today;
    const sevenDaysAhead = new Date(today);
    sevenDaysAhead.setDate(today.getDate() + 10);
    this.optHolidays = sevenDaysAhead.toISOString().substring(0, 10);
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

      let usedDays = 0;

      for (let i = 0; i <= daysDifference; i++) {
        const currentDate = new Date(startDate + i * 24 * 60 * 60 * 1000);
        const dayOfWeek = currentDate.getDay();

        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
          usedDays++;
        }
      }
      this.stillHolidays = 28 - usedDays;
      return usedDays;
    }
    return 0;
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
