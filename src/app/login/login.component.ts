import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {AuthenticateService} from './authenticate.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  constructor(
    private auth: AuthenticateService,
    private formBuilder: FormBuilder
  ) {
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usernameFormControl: new FormControl('', [
        Validators.required,
      ]),
      passwordFormControl: new FormControl('', [
        Validators.required,
      ])
    });
  }

  onSubmit() {
    this.auth.authenticate({
      username: this.f.usernameFormControl.value,
      password: this.f.passwordFormControl.value
    }).subscribe(data => {
      console.log(data);
    });
  }

}
