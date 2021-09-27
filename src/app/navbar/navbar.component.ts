import { QuizService } from './../shared/quiz.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private quizService: QuizService,private router:Router ) { }

  ngOnInit(): void {
  }

   SignOut(){
     localStorage.clear();
  //  clearInterval(this.quizService.second);
     this.router.navigate(['/register'])
   }

}
