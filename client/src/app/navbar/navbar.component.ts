import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cond = false ;

  constructor(private router : Router) {
    console.log(this.router.url);
    if( this.router.url !== '' ){
      this.cond = true ;
    }
    console.log(this.cond)
  }

  ngOnInit() {
    // console.log(this.router.url);
  }

}
