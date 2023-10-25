import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-dienst',
  templateUrl: './view-dienst.component.html',
  styleUrls: ['./view-dienst.component.scss'],
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
  selectedHour: string = '06:00';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {
    this.data = data;
    this.isToday = data.isToday;
    this.getMinDate();
  }

  ngOnInit() {
    console.log(this.data);
  }

  getMinDate() {
    const today = new Date();
    today.setDate(today.getDate() + 2);
    this.minDate = today.toISOString().split('T')[0];
  }

  closeViewDienst() {
    this.dialog.closeAll();
  }

  changeDienst() {
    this.editTag = true;
  }

  beantragenDienst() {
    this.editTag = false;

    this.dialog.closeAll();
  }
}
