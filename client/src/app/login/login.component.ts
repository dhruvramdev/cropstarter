import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errmsg ;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  submit(data){
    console.log(data);
    if( data.email == '' || data.password == '' ){
      this.errmsg = "UserName or Password Incorret" ;
    } else {
      this.router.navigate(['/types']);
    }

  }

}
