import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  //--Properties--

readonly rootUrl ='https://localhost:44317/'
  // timer: NodeJS.Timeout;
  // second: any;
//   http: any;

//  qns:any[];
//  second :number;
//  timer;
//  qnprogress:number;
//  correctAnswerCount: number = 0;


 //--Helper method--
   constructor( private http : HttpClient) {  }


//   //--HTTP method--

   inserParticipant(name:string,Email:string){
     var body ={
       Name:name,
       Email: Email
     }
     return this.http.post(this.rootUrl + '/api/InsertParticipant',body);
   }
    getQuestions(){
   return this.http.get(this.rootUrl+'/api/Questions')
 }

 }

