import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { singup } from './sign-model';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

 singup:singup;

  constructor() {

    this.singup=new singup();

  }

  ngOnInit(): void {
  }

  addmessage(form:NgForm){
    alert("added")
  }

}
