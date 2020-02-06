import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private quizServie:QuizService,private authService:AuthenticationService) { }
  username:string
  quiz:string

  ngOnInit() {
    this.username = this.authService.getUserName()
    this.quiz = this.quizServie.getQuizName()
  }

}
