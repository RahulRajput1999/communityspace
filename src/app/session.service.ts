import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface SessionID {
  sessionID: String;

}

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  constructor(private http: HttpClient) {
  }

  getSession(ID: SessionID) {
    return this.http.post('http://localhost:3000/getSession', ID, {responseType: 'json'});
  }
}
