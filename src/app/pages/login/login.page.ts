import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger('introAnimation', [
      state(
        'middle',
        style({
          transform: 'scale(1)',
        })
      ),
      state(
        'top-left',
        style({
          transform: 'scale(0.4)',
          top: '-100px',
          left: '-100px',
        })
      ),
      transition('middle => top-left', animate('2000ms ease-out')),
    ]),
  ],
})
export class LoginPage implements OnInit {
  loginContainer: boolean = false;
  showPassword: boolean = false;
  userEmail: string = '';
  userPassword: string = '';
  animationState: string = 'middle';
  animateIntro: boolean = false;

  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit() {
    this.startAnimation();
  }

  /**
   * This method will start the animation
   */
  startAnimation() {
    setInterval(() => {
      this.animationState = 'top-left';
    }, 1000);
    setInterval(() => {
      this.loginContainer = true;
    }, 3000);
  }

  /**
   * This method will toggle the password visibility
   */
  toggleVisibility() {
    this.showPassword = !this.showPassword;
  }

  /**
   * This method will submit the form
   * @param form
   */
  submitForm(form: any) {
    if (form.valid) {
      const worker = {
        id: this.sharedService.getId(),
        name: this.userEmail,
        lastname: '',
        email: this.userEmail,
        password: this.userPassword,
        holidays: [],
        dienst: [],
        stillHolidays: 28,
      };
      this.sharedService.saveUserLocalStorage(worker);
      this.router.navigate(['/home']);
    }
  }
}
