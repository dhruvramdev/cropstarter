import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ShopsService {

  private url = 'http://localhost:5000/';

  constructor(private http: Http) {

  }

  getall(){
    return this.http.get(this.url + 'getitemlist' ).map((data) => {
      return data.json();
    });
  }

  getitem(id) {
    console.log(this.url + 'item/' + id);
    return this.http.get(this.url + 'item/' + id ).map(res => {
      console.log(res.json());
      return res.json();
    });

    // return {
    //   name : "Nikhil Pandey",
    //   crop : "Maize" ,
    //   area : "Udaipur" ,
    //   state : "Rajasthan" ,
    //   pledged : 15000 ,
    //   requirement : 20000,
    //   investors : 2,
    //   returns : 4
    // };
  }
}
