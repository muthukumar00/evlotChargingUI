import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  constructor(private router: Router) {

  }

    
    ngOnInit() {
        console.log("LoginComponent testing");
    }

    onSubmit() {
      console.log("You click submit button");
      this.router.navigate(['/heroes', { id: '1' }]);
    }

    
}