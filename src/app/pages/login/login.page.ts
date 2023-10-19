import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginContainer: boolean = false;
  showPassword: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const image = this.el.nativeElement.querySelector('.container-intro img');
    this.renderer.addClass(image, 'logo-transformed');
    setInterval(() => {
      this.loginContainer = true;
    }, 6000);
  }

  toggleVisibility() {
    this.showPassword = !this.showPassword;
  }
}
