import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DescPageComponent } from '../../components/desc-page/desc-page';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the UserValuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-value',
  templateUrl: 'user-value.html',
})
export class UserValuePage implements OnInit{
  
  todo: FormGroup;
  question1: "";    
  time1:"";     
  dataId1: any;
  constructor(public navCtrl: NavController, public navPram: NavParams, private formBuilder: FormBuilder) {
    this.dataId1 = this.navPram.get("id");
  } 
 
  ngOnInit(){         
    this.todo = this.formBuilder.group({
      time1: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(1500)]) ],
      question1:['', Validators.compose([Validators.required, Validators.min(1), Validators.max(50)]) ],    
    });
  }

  

  goToDesc(){
   this.time1 = this.todo.value.time1;
   this.question1 = this.todo.value.question1;  
   this.navCtrl.push(DescPageComponent, {id: this.dataId1, time: this.time1, question: this.question1})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserValuePage');
  }

}
