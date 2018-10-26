import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topic} from './ask/ask.component';

interface Question {
  sessionID: String;
  question: String;
  discription: String;
  tags: Topic[];
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) {
  }

  p1ostQuestion(question: Question) {
    return this.http.post('http://localhost:3000/postQuestion', question, {responseType: 'json'});
  }

  postQuestion(question: Question) {
    return this.http.post('http://localhost:3000/postQuestion', question, {responseType: 'json'});
  }
}
