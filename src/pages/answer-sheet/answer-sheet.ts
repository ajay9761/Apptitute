import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AnswerSheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-answer-sheet',
  templateUrl: 'answer-sheet.html',
})
export class AnswerSheetPage {
  correctAns: any;
    solution: any=[];
    data: any;
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public navPram: NavParams) {
    this.data = this.navPram.get('data');
    this.correctAns = this.navPram.get("data1");
    // this.data = JSON.stringify(this.data);
    //  alert(JSON.stringify(this.correctAns));
    // this.data.push(JSON.stringify(this.navParams.get("data")));
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AnswerSheetPage');
  // }

  cancel() {  
    this.viewCtrl.dismiss();
  }

}
