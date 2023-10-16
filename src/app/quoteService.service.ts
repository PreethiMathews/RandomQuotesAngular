import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from './quote';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private apiServerURL = environment.apiBaseURL;
  constructor(private http: HttpClient) { };

  public getQuote():Observable<Quote>{
    return this.http.get<Quote>(`${this.apiServerURL}/api/getQuote`);
  }
}
