import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = {
    email: '', passwordHash: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.user).subscribe(response => {
      console.log(response);
      this.router.navigate(['/']);
    }, error => {
      console.error('Login failed', error);
    });
  }
}
