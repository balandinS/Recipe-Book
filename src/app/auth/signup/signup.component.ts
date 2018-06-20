import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const signup =  {
      mail: form.value.email,
      password:  form.value.password
    };
    this.auth.signupUser(signup.mail, signup.password);

  }

}
