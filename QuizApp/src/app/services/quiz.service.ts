import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { throwError } from 'rxjs';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})

export class QuizService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
 
  constructor(private http: HttpClient,private authService:AuthenticationService) {
    
   }
   
  
  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: './assets/data/Java.json', name: 'Java' },
      //{ id: '/assets/data/aspnet.json', name: 'Asp.Net' },
      { id: '/assets/data/Cfile.json', name: 'C' },
      { id: '/assets/data/designPatterns.json', name: 'Design Patterns' }
    ];
  }

  
  setQuizName(qname)
  {
    localStorage.setItem('qname',qname)
  }
  removeQuizName()
  {
    localStorage.removeItem('qname')
  }

  getQuizName()
  {
    return localStorage.getItem('qname')
  }
  

}
