import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

export interface Question {
  question: string;
  answer: string;
  date: string;
  tags: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  welcome = 'Account';

  constructor(private router: Router,
              private cookie: CookieService) {
  }

  questions: Question[] = [
    {
      question: 'This is question 1?',
      answer: 'This is answer 1 of question one.' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'Posted on 3rd September 2018',
      tags: ['Tag 1', 'Tag 2']
    },
    {
      question: 'This is question 2?',
      answer: 'This is answer of question two.' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'Posted on 13rd September 2018',
      tags: ['Tag 2', 'Tag 4']
    },
    {
      question: 'This is question 3?',
      answer: 'This is answer 1 of question 3.' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'Posted on 3rd January 2017',
      tags: ['Tag 1', 'Tag 2']
    },
    {
      question: 'This is question 1?',
      answer: 'This is answer 1 of question one.',
      date: 'Posted on 3rd September 2018',
      tags: ['Tag 1', 'Tag 2']
    },
    {
      question: 'This is question 1?',
      answer: 'This is answer 1 of question one.',
      date: 'Posted on 3rd September 2018',
      tags: ['Tag 1', 'Tag 2']
    },
  ];

  ngOnInit() {
  }

  topics() {
    const promice = this.router.navigate(['topics']);
  }

  ask() {
    const promice = this.router.navigate(['/home/ask']);
  }

  redirect() {
    const promise = this.router.navigate(['/home/detail']);
  }
}
