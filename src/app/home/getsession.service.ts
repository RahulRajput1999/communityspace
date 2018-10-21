import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetsessionService {

  constructor(private http: HttpClient) {
  }

  getSession() {
    return this.http.get('http://localhost:3000/getSession', {responseType: 'json', withCredentials: true, observe: 'response'});
  }
}
