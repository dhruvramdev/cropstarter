import { Component, OnInit } from '@angular/core';
import {FarmsService} from "../services/farms.service";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  farms ;

  constructor(private service : FarmsService) { }

  ngOnInit() {
    this.service.getall().subscribe(data => {
      console.log(data);
      this.farms =  data;
    });
  }

}
