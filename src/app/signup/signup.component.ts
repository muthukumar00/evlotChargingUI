import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit{

  constructor(private router: Router) {

  }

    
    ngOnInit() {
        console.log("SignupComponent testing");
    }

    
    
}