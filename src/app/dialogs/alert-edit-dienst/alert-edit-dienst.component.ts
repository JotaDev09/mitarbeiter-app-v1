import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-edit-dienst',
  templateUrl: './alert-edit-dienst.component.html',
  styleUrls: ['./alert-edit-dienst.component.scss'],
})
export class AlertEditDienstComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  /**
   * The function is used to close the dialog
   */
  closeViewDienst() {
    this.dialog.closeAll();
  }
}
