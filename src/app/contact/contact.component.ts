import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  options: Option[] = [
    {value: 'suggestion', viewValue: 'Want to give a suggestion'},
    {value: 'bug', viewValue: 'Report any bug or issue in the websaite'},
    {value: 'abuse', viewValue: 'Report any abuse against any question,topic,community or user'},
    {value: 'other', viewValue: 'Or any other problem...'}
  ];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  selectFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor() {
  }

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
  }

}
