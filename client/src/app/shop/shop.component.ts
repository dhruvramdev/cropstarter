import { Component, OnInit } from '@angular/core';
import {ShopsService} from '../services/shops.service' ;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  items ;

  constructor(private service: ShopsService) { }

  ngOnInit() {
    this.service.getall().subscribe(data => {
      console.log(data);
      this.items =  data;
    });
  }

}
