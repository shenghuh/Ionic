import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    // Save the email and password to local storage (for demonstration only)
    localStorage.setItem('userEmail', this.email);
    localStorage.setItem('userPassword', this.password);
  
    alert('Registration successful! Please log in.');
    this.router.navigate(['/login']);
  }
}
