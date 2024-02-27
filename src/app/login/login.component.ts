import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private service: AuthService,
    private router: Router
  ) {}

  login() {
    this.service.login();
    this.router.navigateByUrl('/products/view');
  }

  logout() {
    this.service.logout();
    this.router.navigateByUrl('/');
  }
}
