import { Component } from '@angular/core';
import {Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';
import { NavController } from 'ionic-angular';
import { DescPageComponent } from '../desc-page/desc-page';


@Component({
  selector: 'adv-data-page',
  templateUrl: 'adv-data-page.html'
})
export class AdvDataPageComponent {
  id: any;
  pages: any;
  text: string;

  constructor(public storage:Storage, public serv:DataProvider, public navCtrl:NavController) {       
  }

  desc(id){
    this.id =id;
    // alert(JSON.stringify(this.id));
    this.navCtrl.push(DescPageComponent, {id});
  }
}
