import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    firstName: '', lastName: '', email: '', passwordHash: '',
    phoneNumber: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    this.authService.register(this.user).subscribe(response => {
      console.log(response);
      this.router.navigate(['/login']);
    }, error => {
      console.error('Registration failed', error);
    });
  }
}
