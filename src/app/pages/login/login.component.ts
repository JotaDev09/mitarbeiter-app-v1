import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  loginContainer: boolean = false;
  showPassword: boolean = false;
  userEmail: string = '';
  userPassword: string = '';
  animationState: string = 'middle';
  animateIntro: boolean = false;
  rememberMe: boolean = false;
  errorPassword: boolean = false;
  errorEmail: boolean = false;

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
    const user = this.sharedService.getUserLocalStorage();
    if (user) {
      if (
        user.email === this.userEmail &&
        user.password === this.userPassword
      ) {
        this.router.navigate(['/home']);
        // } else if (user.email !== this.userEmail) {
        //   this.errorEmail = true;
      } else if (
        user.email === this.userEmail &&
        user.password !== this.userPassword
      ) {
        this.errorPassword = true;
      } else {
        if (form.valid) {
          const worker = {
            id: this.sharedService.getId(),
            privateDaten: {},
            password: this.userPassword,
            holidays: [],
            dienst: [],
            stillHolidays: 28,
            datesLicenses: {},
            carLicenses: [],
            payrolls: [],
            sickCertificate: [],
            insurance: {},
            bank: {},
            reparatur: [],
          };
          this.sharedService.saveUserLocalStorage(worker);
          this.router.navigate(['/home']);
        }
      }
    }
  }

  /**
   * This method will toggle the remember me
   */
  toggleRememberMe() {
    this.sharedService.setRememberMe(!this.sharedService.getRememberMe());
  }

  /**
   * This method will hide the password error
   */
  hidePasswordError() {
    this.errorPassword = false;
  }

  /**
   * This method will hide the email error
   */
  hideEmailError() {
    this.errorEmail = false;
  }
}
