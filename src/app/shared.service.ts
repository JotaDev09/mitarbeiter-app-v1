import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Holidays } from './models/holidays';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  today = new Date();
  day = this.today.getDate();
  month = this.today.getMonth() + 1;
  year = new Date().getFullYear();
  minDate = `${this.day}/${this.month}/${this.year}`;
  holidays: Holidays[] = [];

  constructor() {}

  private pageTitle = new BehaviorSubject<string>('');
  pageTitle$ = this.pageTitle.asObservable();

  /**
   * Call this function to update the title of the page
   * @param title The title to be updated
   */
  updateTitle(title: string) {
    this.pageTitle.next(title);
  }

  /**
   * Generates a random id
   */
  getId(): string {
    return uuidv4();
  }

  /**
   * Save the user in the local storage
   * @param worker The worker to be saved
   */
  saveUserLocalStorage(worker: any) {
    const user = JSON.parse(localStorage.getItem('user') || '[]');
    user.push(worker);
    localStorage.setItem('user', JSON.stringify(worker));
  }

  /**
   * Get the user from the local storage
   */
  getUserLocalStorage() {
    const user = JSON.parse(localStorage.getItem('user') || '[]');
    return user;
  }

  /**
   * Save the holidays in the local storage
   * @param holidayData The holiday data to be saved
   */
  saveHolidaysLocalStorage(holidayData: any) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    user.holidays = user.holidays || [];
    user.holidays.push(holidayData);
    localStorage.setItem('user', JSON.stringify(user));
  }

  /**
   * Updates thes remain holidays from the local storage
   */
  updateStillHolidaysLocalStorage(stillHolidays: number) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    user.stillHolidays = stillHolidays;
    localStorage.setItem('user', JSON.stringify(user));
  }

  updateInfoLocalStorage(worker: any) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (worker.name !== undefined) {
      user.name = worker.name;
    }
    if (worker.lastname !== undefined) {
      user.lastname = worker.lastname;
    }
    if (worker.phone !== undefined) {
      user.phone = worker.phone;
    }
    if (worker.email !== undefined) {
      user.email = worker.email;
    }
    if (worker.address !== undefined) {
      user.address = worker.address;
    }
    if (worker.stadt !== undefined) {
      user.stadt = worker.stadt;
    }
    if (worker.driverLicense !== undefined) {
      user.driverLicense = worker.driverLicense;
    }
    if (worker.ambulanceLicense !== undefined) {
      user.ambulanceLicense = worker.ambulanceLicense;
    }
    localStorage.setItem('user', JSON.stringify(user));
  }

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
}
