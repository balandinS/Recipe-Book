import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  onSignin(form: NgForm) {
    const signup =  {
      mail: form.value.email,
      password:  form.value.password
    };
    this.auth.signipUser(signup.mail, signup.password);
  }

}
