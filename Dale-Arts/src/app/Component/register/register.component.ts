import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) {}

  register() {
    if (this.email == '') {
      alert('Please Enter Email');
      return;
    }
    if (this.password == '') {
      alert('Please Enter Password');
      return;
    }
    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {}
}
