import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Holidays } from './models/holidays';

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

  /**
   * Updates the user info from the local storage
   * @param worker The worker to be updated
   */
  updateInfoLocalStorage(worker: any) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    const propertiesToUpdate = [
      'name',
      'lastname',
      'phone',
      'email',
      'address',
      'stadt',
      'driverLicense',
      'ambulanceLicense',
      'insuranceName',
      'insuranceNumber',
    ];

    propertiesToUpdate.forEach((property) => {
      if (worker[property] !== undefined) {
        user[property] = worker[property];
      }
    });

    if (worker.carLicenses !== undefined) {
      const uniqueFiles = this.getUniqueFiles([
        ...(user.carLicenses || []),
        ...(worker.carLicenses || []),
      ]);

      user.carLicenses = uniqueFiles;
    }

    if (worker.sickCertificate !== undefined) {
      const uniqueFiles = this.getUniqueFiles([
        ...(user.sickCertificate || []),
        ...(worker.sickCertificate || []),
      ]);

      user.sickCertificate = uniqueFiles;
    }

    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }

  /**
   * The function getUniqueFiles() is a function that gets the unique files
   * @param files the files to be checked
   * @returns the unique files
   */
  private getUniqueFiles(files: any[]): any[] {
    if (!Array.isArray(files) || !files.every((file) => file && file.name)) {
      return [];
    }
    const fileSet = new Set(files.map((file) => file.name));

    return Array.from(fileSet).map((fileName) => ({ name: fileName }));
  }

  /**
   * The function getHolidaysFromLocalStorage() is a function that gets the holidays from the local storage
   * @returns the holidays
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
   * @param holidays the holidays to be grouped
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
}
