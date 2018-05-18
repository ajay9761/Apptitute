import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class DataProvider {

  val: any;
  constructor(public http: Http) {
  }

  getEasyData() {
    return new Promise(resolve => {
      this.http.get('assets/data/easyData.json').map(res => res.json())
        .subscribe(data => {
          this.val = data;
          resolve(this.val);
        })
    })
  }

  getMedData() {
    return new Promise(resolve => {
      this.http.get('assets/data/medData.json').map(res => res.json())
        .subscribe(data => {
          this.val = data;
          resolve(this.val);
        })
    })
  }

  getAdvData() {
    return new Promise(resolve => {
      this.http.get('assets/data/advData.json').map(res => res.json())
        .subscribe(data => {
          this.val = data;
          resolve(this.val);
        })
    })
  }
} 
