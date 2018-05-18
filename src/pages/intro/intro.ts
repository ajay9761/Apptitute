import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FirstPageComponent } from '../../components/first-page/first-page';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  goToHome() {
    this.navCtrl.setRoot(FirstPageComponent);
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }
  
  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }

}
