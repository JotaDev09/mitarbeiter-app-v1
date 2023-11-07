import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert-cancel-hol',
  templateUrl: './alert-cancel-hol.component.html',
  styleUrls: ['./alert-cancel-hol.component.scss'],
  imports: [MatProgressBarModule, CommonModule],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
})
export class AlertCancelHolComponent implements OnInit {
  loadBar: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {
    this.data = data;
  }

  ngOnInit() {}

  /**
   * The function is used to format the date
   */
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  /**
   * The function is used to close the dialog
   */
  closeCancelHolidays() {
    this.dialog.closeAll();
  }

  /**
   * The function is used to cancel the holidays
   */
  cancelHolidays() {
    this.loadBar = true;
    const userDataJSON = localStorage.getItem('user');
    if (userDataJSON) {
      const userData = JSON.parse(userDataJSON);
      const holidays = userData.holidays || [];
      const id = this.data.id;
      const indexToRemove = holidays.findIndex(
        (holiday: any) => holiday.id === id
      );
      if (indexToRemove !== -1) {
        holidays.splice(indexToRemove, 1);
        userData.holidays = holidays;
        localStorage.setItem('user', JSON.stringify(userData));
      }
      setTimeout(() => {
        this.closeCancelHolidays();
      }, 1000);
    }
  }
}
