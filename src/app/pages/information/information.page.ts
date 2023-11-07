import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.updateTitle('Information');
    console.log('Information Page');
  }
}
