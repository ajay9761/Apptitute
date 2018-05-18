import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
// import { Storage } from '../@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirstPageComponent } from '../components/first-page/first-page';
import { DataPageComponent } from '../components/data-page/data-page';
import { DataProvider } from '../providers/data/data';
import { HttpModule } from '@angular/http';
import { MedDataPageComponent } from '../components/med-data-page/med-data-page';
import { AdvDataPageComponent } from '../components/adv-data-page/adv-data-page';
import { DescPageComponent } from '../components/desc-page/desc-page';
import { SignaturePadModule } from 'angular2-signaturepad';
import { RoughWorkComponent } from '../components/rough-work/rough-work';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ShowResultPage } from '../pages/show-result/show-result';
import { IntroPage } from '../pages/intro/intro';
import { AnswerSheetPage } from '../pages/answer-sheet/answer-sheet';
import { UserValuePage } from '../pages/user-value/user-value';
import { AppRate } from '@ionic-native/app-rate';
import { AboutPage } from '../pages/about/about';
import { AdMobFree } from '@ionic-native/admob-free';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FirstPageComponent,
    DataPageComponent,
    MedDataPageComponent,
    AdvDataPageComponent,
    DescPageComponent,
    RoughWorkComponent,
    ShowResultPage,
    IntroPage,
    AnswerSheetPage,
    UserValuePage,
    AboutPage


  ],
  imports: [
    SignaturePadModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FirstPageComponent,
    DataPageComponent,
    MedDataPageComponent,
    AdvDataPageComponent,
    DescPageComponent,
    RoughWorkComponent,
    ShowResultPage,
    IntroPage,
    AnswerSheetPage,
    UserValuePage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider,
    Storage,
    AppRate,
    AdMobFree
  ]
})
export class AppModule { }
