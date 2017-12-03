import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FarmsService {

  private url = 'http://cropstarter.herokuapp.com/';

  constructor(private http: Http) {

  }

  getall(){
    return this.http.get(this.url + 'getfarmlist' ).map((data) => {
      return data.json();
    });
  }

  getfarm(id) {
    console.log(this.url + 'farm/' + id);
    return this.http.get(this.url + 'farm/' + id ).map(res => {
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
