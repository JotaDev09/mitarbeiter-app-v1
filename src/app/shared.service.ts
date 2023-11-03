import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  today = new Date();
  day = this.today.getDate();
  month = this.today.getMonth() + 1;
  year = new Date().getFullYear();
  minDate = `${this.day}/${this.month}/${this.year}`;

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
}
