import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import {Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';
import { DescPageComponent } from '../desc-page/desc-page';

@Component({
  selector: 'data-page',
  templateUrl: 'data-page.html'
})    
export class DataPageComponent {
  id: any;
  text: string;
  pages: any;

  constructor(public storage:Storage, public serv:DataProvider, public navCtrl: NavController) {
  }

  desc(id){
    this.id =id;
    // alert(JSON.stringify(this.id));
    this.navCtrl.push(DescPageComponent, {id});
  } 
}
