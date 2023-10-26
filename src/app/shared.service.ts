import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
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
}
