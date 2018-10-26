import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

interface SessionID {
  sessionID: String;

}

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  constructor(private http: HttpClient,
              private cookie: CookieService) {
  }

  getSession(ID: SessionID) {
    return this.http.post('http://localhost:3000/getSession', ID, {responseType: 'json'});
  }

  destroySession(ID: SessionID) {
    this.cookie.delete('sessionID');
    return this.http.post('http://localhost:3000/destroySession', ID, {responseType: 'json'});
  }

  getUser() {
    const sessionID = {sessionID: this.cookie.get('sessionID')};
    return this.http.post('http://localhost:3000/getUser', sessionID, {responseType: 'json'});
  }
}
