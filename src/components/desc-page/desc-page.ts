import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController } from "ionic-angular";
import { RoughWorkComponent } from '../rough-work/rough-work';
import { Storage } from '@ionic/storage';
import { ShowResultPage } from '../../pages/show-result/show-result';
import { PTimer } from "./ptimer";
import swal from 'sweetalert';
import { AdMobFreeInterstitialConfig, AdMobFree } from '@ionic-native/admob-free';

@Component({
    selector: 'desc-page',
    templateUrl: 'desc-page.html'
})
export class DescPageComponent {

    dataId2: any = [];
    skpBtn: boolean = false;
    nxtBtn: boolean = true;
    stopTimer: number = 0;
    questionLimit: any;
    time: any;
    rate_value: any;
    timeLimit: number = 120;
    dataId1: any;
    answer: string;
    correctAnswer = [];
    nonAttempt: number = 0;
    turnSlide: number;
    turntime: number;
    dataId: any = [];
    feed: any;
    question: any;
    list: {};
    jList: {};
    qListId: any;
    i: any;
    leaveTime2: boolean = true;
    private timeInSeconds: number;
    public timer: PTimer;


    @ViewChild('slides') slides: any;
    hasAnswered: boolean = false;
    score: number = 0;
    skip: number = 0;
    attempt: number = 0;
    slideOptions: any;
    questions: any;

    constructor(public navCtrl: NavController,
        public navPram: NavParams,
        public menuCtrl: MenuController,
        public storage: Storage,
        public admobFree: AdMobFree) {

        this.dataId1 = this.navPram.get("id");
        this.time = this.navPram.get("time");
        this.questionLimit = this.navPram.get("question");

        for (let i = 0; i < 100; i++) {
            this.dataId2 = this.dataId1.questions[Math.floor(Math.random() * this.dataId1.questions.length)];
            if (this.dataId.length < this.questionLimit) {
                if (this.dataId.indexOf(this.dataId2) == -1) {
                    this.dataId.push(this.dataId2);
                }
            }
            else {
                break;
            }
        }
    }

    /////////////////Timer Start////////////////////////////////////
    ngOnInit() {
        this.initTimer();
    }

    initTimer() {
        if (!this.timeInSeconds) { this.timeInSeconds = this.time; }

        this.timer = <PTimer>{
            time: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            timeRemaining: this.timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.timeRemaining);
    }


    getSecondsAsDigitalClock(inputSeconds: number) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        // var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        // hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return minutesString + ':' + secondsString;
    }

    startTimer() {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    }

    timerTick() {
        this.turntime = setTimeout(() => {
            if (!this.timer.runTimer) { return; }
            this.timer.timeRemaining--;
            this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.timeRemaining);
            if (this.timer.timeRemaining > 0) {
                this.timerTick();
            }
            else {
                this.timer.hasFinished = true;
                if (this.stopTimer == 0) {
                    swal("Successfully Submitted", "", "success");
                    this.navCtrl.push(ShowResultPage, { data: this.dataId, correctData: this.correctAnswer, questionLimit: this.questionLimit });
                }
            }
        }, 1000);
    }

    hasFinished() {
        return this.timer.hasFinished;
    }
    pauseTimer() {
        this.timer.runTimer = false;
    }
    resumeTimer() {
        this.startTimer();
    }
    ///////////////////Timer End//////////////////////////////////


    ionViewDidLoad() {
        this.slides.lockSwipes(true);
        this.question = this.dataId;
        this.questions = this.question;
    }

    openRough() {
        this.navCtrl.push(RoughWorkComponent);
    }

    skipQues(attempt) {
        clearTimeout(this.turnSlide);
        clearTimeout(this.turntime);
        this.startTimer();
        this.slideChanged();
        this.answer = "SKIP";
        this.correctAnswer.push(this.answer);
        this.nonAttempt++;
        this.skip = this.questionLimit - (this.attempt + this.nonAttempt);
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    }

    nextSlide() {
        clearTimeout(this.turnSlide);
        clearTimeout(this.turntime);
        this.startTimer();
        this.slideChanged();
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    }

    nextS(answer, question, nonAttempt) {
        clearTimeout(this.turnSlide);
        clearTimeout(this.turntime);
        this.rate_value;
        this.correctAnswer.push(this.rate_value.answer);
        this.attempt++;
        this.skip = this.questionLimit - (this.attempt + this.nonAttempt);
        if (this.rate_value.correct) {
            this.score++;
        }
        this.startTimer();
        this.slideChanged();
        this.skpBtn = false;
        this.nxtBtn = true;
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    }

    selectAnswer(answer, question, nonAttempt) {
        this.hasAnswered = true;
        answer.selected = true;
        this.skpBtn = true;
        this.nxtBtn = false;
        this.rate_value = answer;
        this.hasAnswered = false;
        answer.selected = false;
    }

    randomizeAnswers(rawAnswers: any[]): any[] {
        for (let i = rawAnswers.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = rawAnswers[i];
            rawAnswers[i] = rawAnswers[j];
            rawAnswers[j] = temp;
        }
        return rawAnswers;
    }

    launchInterstitial() {
        let interstitialConfig: AdMobFreeInterstitialConfig = {
            isTesting: true, // Remove in production
            autoShow: true,
            id: ""
        };
        this.admobFree.interstitial.config(interstitialConfig);

        this.admobFree.interstitial.prepare().then(() => {
            console.log("success");// success
        });
    }

    slideChanged() {
        let currentIndex = this.slides.getActiveIndex();
        if (currentIndex == 2 || currentIndex == 5 || currentIndex == 13 || currentIndex == 21 || currentIndex == 32) {
            this.launchInterstitial();
        }

        console.log('Current index is', currentIndex);
        if (currentIndex == this.questionLimit) {
            this.stopTimer = 1;
            swal("Successfully Submitted", "", "success");
            this.navCtrl.push(ShowResultPage, { data: this.dataId, correctData: this.correctAnswer, questionLimit: this.questionLimit });
        }
    }     

    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }

    ionViewWillLeave() {
        this.menuCtrl.enable(true);
    }
}

