import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

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
    '06:00 - 14:00',
    '06:30 - 14:30',
    '07:00 - 15:00',
    '08:00 - 16:00',
    '09:00 - 17:00',
    '10:00 - 18:00',
    '12:00 - 20:00',
    '14:00 - 22:00',
    '22:00 - 06:00',
  ];
  selectedHour: string = '06:00 - 14:00';
  selectedDay: string = '01/01/21';

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
  changeDienst() {
    this.editTag = true;
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
        newDienst: this.selectedHour,
      };
      console.log(changeDienst);
    }
    this.editTag = false;
    this.dialog.closeAll();
  }
}
