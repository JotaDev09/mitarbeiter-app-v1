import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-license',
  templateUrl: './alert-license.component.html',
  styleUrls: ['./alert-license.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AlertLicenseComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AlertLicenseComponent>
  ) {
    this.data = data;
  }

  ngOnInit() {
    console.log(this.data);
  }

  /**
   * The function is used to close the dialog
   */
  closeAlertLicense() {
    this.dialogRef.close();
  }
}
