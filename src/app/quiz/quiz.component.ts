import { QuizService } from './../shared/quiz.service';
import { Router } from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

   constructor(private router :Router,private quizeservice :QuizService){}




  ngOnInit(){
    // this.quizeservice.second =0;
    // this.quizeservice.qnprogress =0;
    //  this.quizeservice.getQuestions().subscribe(
    //    (data:any)=>{
    //    //  this.quizeservice.qns= data;
    //      this.startTimer();
    //    }


    //  );


  }
  //startTimer(){
  //  this.quizeservice.timer= setInterval(() => {
  //   this.quizeservice.second++;


  //     },1000);
  //  }



}
