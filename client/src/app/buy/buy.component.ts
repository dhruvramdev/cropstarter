import { Component, OnInit } from '@angular/core';
import {FarmsService} from '../services/farms.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  id ;
  user ;

  constructor(private route: ActivatedRoute, private service : FarmsService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id);

      this.user = this.service.getfarm(this.id).subscribe(data => {
        // console.log(data);
        this.user = data ;
      });

    });

  }

}
