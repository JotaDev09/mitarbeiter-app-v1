import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  pageTitle = '';

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private sharedService: SharedService
  ) {
    this.sharedService.pageTitle$.subscribe((title) => {
      this.pageTitle = title;
    });
  }

  ngOnInit() {}

  /**
   * The function is used to navigate to the home page
   */
  toDienst() {
    this.router.navigate(['/home']);
  }

  /**
   * The function is used to navigate to the holidays page
   */
  toHolidays() {
    this.router.navigate(['/holidays']);
  }

  /**
   * The function is used to navigate to the holidays page
   */
  toHolidaysResum() {
    this.router.navigate(['/holidays-resum']);
  }

  /**
   * The function is used to sign out the user and redirect to login page
   */
  signOut() {
    //implement sign out functionality here
    this.router.navigate(['/login']);
  }

  /**
   * The function is used to navigate to the information page
   */
  toInformation() {
    this.router.navigate(['/information']);
  }

  /**
   * The function is used to navigate to the calendar page
   */
  toCalendar() {
    this.router.navigate(['/calendar']);
  }

  /**
   * The function is used to navigate to the profil page
   */
  toProfil() {
    this.router.navigate(['/profil']);
  }
}
