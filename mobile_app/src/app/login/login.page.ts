import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Retrieve stored email and password (for demonstration only)
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
  
    if (this.email === storedEmail && this.password === storedPassword) {
      this.router.navigate(['/video-upload']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
