import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { FirstPageComponent } from '../../components/first-page/first-page';
import { AnswerSheetPage } from '../answer-sheet/answer-sheet';


@IonicPage()
@Component({
    selector: 'page-show-result',
    templateUrl: 'show-result.html',
})
export class ShowResultPage {

    questionLimit: any;
    correctAns: any;
    allData: any;
    final2: string;
    final1: string[];
    text: string;
    skp: string;
    final: string;
    atmpt: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public share: SocialSharing, public navPram: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {
        this.allData = this.navPram.get("data");
        this.correctAns = this.navPram.get("correctData")
        this.questionLimit = this.navPram.get("questionLimit");
    }

    ionViewDidEnter() {
        this.msgPrint();
    }

    msgPrint() {
        this.atmpt = document.getElementById("atmpt").textContent;
        this.skp = document.getElementById("nonatmpt").textContent;
        this.final = document.getElementById("final").textContent;

        this.final1 = this.final.split(" ");
        this.final2 = this.final1[2];

        // if (parseInt(this.final2) < 5) {
        this.text = "You have " + this.questionLimit + " Questions to solve" + "\n" + this.atmpt + "Questions out of " + this.questionLimit + "\n" + this.skp + " Questions" + "\n" + "My " + this.final;
        // }

        // else if (parseInt(this.final2) > 5 && parseInt(this.final2) < 10) {
        //     this.text = "You have " + this.questionLimit + " Questions to solve" + "\n" + this.atmpt + "Questions out of " + this.questionLimit + "\n" + this.skp + " Questions" + "\n" + "My " + this.final + "\n" + "Better";
        // }

        // else if (parseInt(this.final2) == 10) {
        //     this.text = "You have " + this.questionLimit + " Questions to solve" + "\n" + this.atmpt + "Questions out of " + this.questionLimit + "\n" + this.skp + " Questions" + "\n" + "My " + this.final + "\n" + "Great Performance";
        // }
    }

    facebookShare() {
        this.msgPrint();
        this.share.shareViaFacebookWithPasteMessageHint(this.text)
            .then(() => {
                // alert("Succsess");
            },
                () => {
                    // alert("failed")
                })
    }

    whtsappShare() {
        this.msgPrint();
        this.share.shareViaWhatsApp(this.text)
            .then(() => {
                // alert("Success");
            },
                () => {
                    // alert("failed")
                })
    }

    // restartQuiz() {
    //     this.navCtrl.pop();
    // }

    result() {
        let addModal = this.modalCtrl.create(AnswerSheetPage, { data: this.allData, data1: this.correctAns });
        addModal.present();
    }


    home() {
        this.navCtrl.setRoot(FirstPageComponent);
    }

}
