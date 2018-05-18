import { Component, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import {Storage } from '@ionic/storage';
import { NavParams, NavController } from 'ionic-angular';


@Component({
  selector: 'rough-work',
  templateUrl: 'rough-work.html'
})

export class RoughWorkComponent {

  isDrawing = false;
  signature: '';
  id: any;
  text: string;

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  private signaturePadOptions: Object = { 
    'minWidth': 2,
    'canvasWidth': 400,
    'canvasHeight': 450,
    'backgroundColor': '#f6fbff',
    'penColor': '#666a73'
  };
  
  constructor(public navpram:NavParams, public storage:Storage, public navCtrl: NavController) {     
  }

  ionViewDidEnter() {
    this.signaturePad.clear()
    this.storage.get('savedSignature').then((data) => {
      this.signature = data;
    });
  }

  drawComplete() {
    this.isDrawing = false;
  }
 
  drawStart() {
    this.isDrawing = true;
  }

  clearPad() {
    this.signaturePad.clear();
  }

  dismissRough(){
    this.navCtrl.pop();
  }
}
