import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.page.html',
  styleUrls: ['./holidays.page.scss'],
})
export class HolidaysPage implements OnInit {
  constructor(private sharedService: SharedService) {
    this.sharedService.updateTitle('UrlaubsAntrag');
  }

  ngOnInit() {}
}
