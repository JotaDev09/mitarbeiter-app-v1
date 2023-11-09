import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Holidays } from 'src/app/models/holidays';
import { MatDialog } from '@angular/material/dialog';
import { AlertCancelHolComponent } from 'src/app/dialogs/alert-cancel-hol/alert-cancel-hol.component';

@Component({
  selector: 'app-holidays-resum',
  templateUrl: './holidays-resum.page.html',
  styleUrls: ['./holidays-resum.page.scss'],
})
export class HolidaysResumPage implements OnInit {
  holidays: Holidays[] = [];
  holidaysData: any[] = [];
  holiday: any;
  editHolidays: boolean = true;
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
  newHolidaysFrom: string = '';
  newHolidaysTo: string = '';
  currentEditIndex: number | null = null;
  holidayIndex: number | null = null;
  yearGroupIndex: number | null = null;
  currentEditingId: string | 0 = 0;
  stillHolidays = this.sharedService.getUserLocalStorage().stillHolidays;
  isEditing: boolean = false;
  tempHolidaysFrom: string | null = null;
  tempHolidaysTo: string | null = null;
  temNotes: string | null = null;
  newDates: boolean = false;

  status = [
    { name: 'approved', icon: 'assets/icons/status-tick.png' },
    { name: 'waiting', icon: '/assets/icons/status-wait.png' },
    { name: 'rejected', icon: 'assets/icons/status-cancel.png' },
  ];

  constructor(private sharedService: SharedService, private dialog: MatDialog) {
    this.sharedService.updateTitle('Urlaubs Übersicht');
  }

  ngOnInit() {
    this.getHolidaysFromLocalStorage();
    this.habilityCalendarOption();
    this.habilityNextYearOption();
  }

  /**
   * The function getHolidaysFromLocalStorage() is a function that gets the holidays from the local storage
   * @returns groupedHolidaysData
   */
  getHolidaysFromLocalStorage() {
    const userDataJSON = localStorage.getItem('user');
    if (userDataJSON) {
      const userData = JSON.parse(userDataJSON);
      const holidays = userData.holidays || [];
      this.holidays = holidays;
      const groupedHolidaysData = this.groupedHolidays(holidays);
      return groupedHolidaysData;
    }
    return [];
  }

  /**
   * The function groupedHolidays() is a function that groups the holidays by year
   * @param holidays The holidays to be grouped
   * @returns the grouped holidays
   */
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

  /**
   * The function habilityCalendarOption() is a function that allows the user to select the current day
   */
  habilityCalendarOption() {
    this.optHolidays = this.sharedService.today.toISOString().substring(0, 10);
  }

  /**
   * The function habilitateNextYearOption() is a function that allows the user to select the next year
   * @param id The id of the holiday to be deleted
   */
  habilityNextYearOption() {
    if (this.currentMonth >= 10) {
      this.showNextYearOption = true;
      this.maxOptionHolidays = `${this.nextYear}-12-31`;
    }
    this.maxOptionHolidays = `${this.sharedService.year}-12-31`;
  }

  /**
   * The function updateHolidaysFrom() is a function that updates the holidays "from"
   * @param event The event to be updated
   */
  updateTempHolidaysFrom(event: any) {
    this.tempHolidaysFrom = event.target.value;
    this.newDates = true;
  }

  /**
   * The function updateHolidaysTo() is a function that updates the holidays "to"
   * @param event The event to be updated
   */
  updateTempHolidaysTo(event: any) {
    this.tempHolidaysTo = event.target.value;
    console.log(this.tempHolidaysTo);
    this.newDates = true;
  }

  /**
   * The function updateTextArea() is a function that updates the text area
   * @param event The event to be updated
   */
  updateTextArea(event: any) {
    this.temNotes = event.target.value;
    console.log(this.temNotes);
  }

  /**
   * The function getStatusIcon() is a function that gets the status icon
   * @param id The id of the holiday to be edited
   */
  getStatusIcon(status: any) {
    const statusObj = this.status.find((s) => s.name === status);
    return statusObj ? statusObj.icon : '';
  }

  /**
   * The function formatDate() is a function that formats the date
   * @param dateString The date to be formatted
   * @returns the formatted date
   */
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  /**
   * The function editHolidaysButton() is a function that allows the user to edit the holidays
   */
  editHolidaysButton(id: string) {
    const holiday = this.holidays.find((h) => h.id === id);
    if (holiday) {
      this.isEditing = true;
      this.editHolidays = false;
      this.currentEditingId = id;
    }
  }

  /**
   * The function requestHolidaysChange() is a function that allows the user to request a change in the holidays
   * @param holiday The holiday to be changed
   */
  requestHolidaysChange(holiday: any) {
    if (holiday) {
      holiday.holidaysFrom = this.tempHolidaysFrom;
      holiday.holidaysTo = this.tempHolidaysTo;
      // holiday.notes = this.temNotes;
      // console.log(this.temNotes);
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      user.holidays = user.holidays || [];

      const index = user.holidays.findIndex((h: any) => h.id === holiday.id);

      if (index !== -1) {
        user.holidays[index] = holiday;
        localStorage.setItem('user', JSON.stringify(user));
        this.newDates = false;
        this.requestHolidaysCancel(holiday.id);
      }
    }
  }

  /**
   * The function requestHolidaysCancel() is a function that allows the user to cancel the holidays editing
   * @param id The id of the holiday to be canceled
   */
  requestHolidaysCancel(id: string) {
    const holiday = this.holidays.find((h) => h.id === id);
    if (holiday) {
      this.isEditing = false;
      this.editHolidays = true;
      this.currentEditingId = id;
      this.newDates = false;
    }
  }

  /**
   * The function cancelHolidays() is a function that allows the user to cancel the holidays
   * @param id The id of the holiday to be deleted
   */
  cancelHolidays(id: string, holidaysFrom: string, holidaysTo: string) {
    const holiday = this.holidays.find((h) => h.id === id);
    const dialogRef = this.dialog.open(AlertCancelHolComponent, {
      data: {
        id: holiday?.id,
        holidaysFrom: holiday?.holidaysFrom,
        holidaysTo: holiday?.holidaysTo,
      },
    });
  }
}
