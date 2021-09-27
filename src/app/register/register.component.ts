import { QuizService } from './../shared/quiz.service';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  Validatorspattern = "[^@]+@[^@]+\.[a-zA-Z]{2,}";

  constructor(private quizService : QuizService,private route : Router) { }

  ngOnInit(): void {
  }

  OnSubmit(name:string,Email:string){

    this.quizService.inserParticipant(name,Email).subscribe(

       (data : any) =>{
         localStorage.clear();
         localStorage.setItem('participate',JSON.stringify(data));

         this.route.navigate(['/quiz']);
       }
     );


  }



}
