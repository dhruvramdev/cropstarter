import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FarmsService } from "../services/farms.service";


@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {
  id: number;
  user: any;

  constructor(private route: ActivatedRoute, private service : FarmsService ) {
  }

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
