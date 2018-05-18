import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { UserValuePage } from '../../pages/user-value/user-value';


@Component({
  selector: 'first-page',
  templateUrl: 'first-page.html'
})

export class FirstPageComponent {
  pages: {};
  id: any;
  text: string;

  constructor(public navCtrl: NavController, public serv: DataProvider) {
  }

  easyData() {
    this.serv.getEasyData().then(data => {
      this.navCtrl.push(UserValuePage, { id: data });
    })
  }

  medData() {
    this.serv.getMedData().then(data => {
      this.navCtrl.push(UserValuePage, { id: data });
      // this.pages = data;
    })
  }

  advData() {
    this.serv.getAdvData().then(data => {
      this.navCtrl.push(UserValuePage, { id: data });
    })
  }
}
