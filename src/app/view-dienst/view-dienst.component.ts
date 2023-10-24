import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-dienst',
  templateUrl: './view-dienst.component.html',
  styleUrls: ['./view-dienst.component.scss'],
})
export class ViewDienstComponent implements OnInit {
  public isToday: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.data = data;
    this.isToday = data.isToday;
  }

  ngOnInit() {
    console.log(this.data);
  }
}
