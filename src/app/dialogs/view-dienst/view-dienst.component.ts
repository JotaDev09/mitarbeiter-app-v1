import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { AlertEditDienstComponent } from '../alert-edit-dienst/alert-edit-dienst.component';

@Component({
  selector: 'app-view-dienst',
  templateUrl: './view-dienst.component.html',
  styleUrls: ['./view-dienst.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewDienstComponent implements OnInit {
  public isToday: boolean;
  public minDate: string = '';

  editTag: boolean = false;
  availableHours: string[] = [
    '06:00',
    '06:30',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '12:00',
    '14:00',
    '22:00',
  ];
  selectedFromHour: string = '06:00';
  selectedmaximalHour: string = '06:00';
  selectedDay: string = '01/01/21';
  today = new Date();
  requestFromTwoDays = this.today.setDate(this.today.getDate() + 2);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private datePipe: DatePipe
  ) {
    this.data = data;
    this.isToday = data.isToday;
    this.getMinDate();
  }

  ngOnInit() {
    console.log(this.data);
  }

  /**
   * The function is used to set the possibility to change the dienst two days after the current day
   */
  getMinDate() {
    const today = new Date();
    today.setDate(today.getDate() + 2);
    this.minDate = today.toISOString().split('T')[0];
  }

  /**
   * The function is used to close the dialog
   */
  closeViewDienst() {
    this.dialog.closeAll();
  }

  /**
   * The function is used to open the view to change the dienst
   */
  changeDienst(selectedDay: string) {
    if (selectedDay) {
      const selectedDate = new Date(
        parseInt(selectedDay.slice(6), 10) + 2000,
        parseInt(selectedDay.slice(3, 5), 10) - 1,
        parseInt(selectedDay.slice(0, 2), 10)
      );

      const twoDaysAhead = new Date(this.today);
      twoDaysAhead.setDate(this.today.getDate() + 0);

      if (selectedDate < twoDaysAhead) {
        this.dialog.open(AlertEditDienstComponent, {});
      } else {
        this.editTag = true;
      }
    }
  }

  /**
   * The function is used to solicit a change in dienst
   */
  beantragenDienst() {
    if (this.editTag) {
      let formattedNewDay = this.datePipe.transform(
        this.selectedDay,
        'dd/MM/yy'
      );

      let changeDienst = {
        day: this.data.day,
        newDay: formattedNewDay,
        dienst: this.data.dienst,
        newFromHour: this.selectedFromHour,
        newMaxHour: this.selectedmaximalHour,
      };
      console.log(changeDienst);
    }
    this.editTag = false;
    this.dialog.closeAll();
  }
}
