import {Component, OnInit} from '@angular/core';
import {SessionService} from './session.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public welcome = 'Account';

  constructor(private  session: SessionService,
              private cookie: CookieService) {
  }

  ngOnInit() {
    this.session.getSession({sessionID: this.cookie.get('sessionID')}).subscribe(data => {
      if (data['status']) {
        console.log(data['session']);
        this.welcome = data['session'].userName;
      } else {
        this.welcome = 'Account';
      }
      console.log('Whole Session' + data['status']);
      console.log(data['session']);
      console.log(this.welcome);
    });
  }
}
