import { Component, OnInit } from '@angular/core';
import {ShopsService} from '../services/shops.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item ;
  id ;

  constructor(private service: ShopsService , private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id);

      this.service.getitem(this.id).subscribe(data => {
        console.log(data);
        this.item =  data;
      })
    });
    ;
  }

}
