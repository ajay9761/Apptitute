import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FirstPageComponent } from '../components/first-page/first-page';
import { DataProvider } from '../providers/data/data';
import { Storage } from '@ionic/storage';
import { IntroPage } from '../pages/intro/intro';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AppRate } from '@ionic-native/app-rate';
import { AboutPage } from '../pages/about/about';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen, public serv: DataProvider,
    public storage: Storage, public loadingCtrl: LoadingController,
    public share: SocialSharing,
    public appRate: AppRate,
    public admobFree: AdMobFree) {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.showBanner();

      let loadingPopup = this.loadingCtrl.create({
        content: 'Please Wait...'
      });

      loadingPopup.present();

      setTimeout(() => {
        loadingPopup.dismiss();
      }, 1000);
    });

    this.storage.get('introShown').then((result) => {
      if (result) {
        this.rootPage = FirstPageComponent;
      } else {
        this.rootPage = IntroPage;
        this.storage.set('introShown', true);
      }
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: FirstPageComponent },
      { title: 'About Us', component: AboutPage }
    ];
  }

  showBanner() {
    let bannerConfig: AdMobFreeBannerConfig = {
        isTesting: true, // Remove in production
        autoShow: true,
        id: ""
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare().then(() => {
        console.log("success");// success
    });
}

  shareApp() {
    this.share.share("Here you can test your Aptitude Knowledge", "Aptitude App", null, "https://play.google.com/store/apps/details?id=com.techprocompsoft.aptitude")
      .then(() => {
        // alert("Succsess");
      },
        () => {
          // alert("failed")
        })
  }

  rateApp() {
    this.appRate.preferences.storeAppURL = {
      android: 'https://play.google.com/store/apps/details?id=com.techprocompsoft.aptitude'
    };
    this.appRate.promptForRating(true);
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
