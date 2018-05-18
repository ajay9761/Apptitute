import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnswerSheetPage } from './answer-sheet';

@NgModule({
  declarations: [
    AnswerSheetPage,
  ],
  imports: [
    IonicPageModule.forChild(AnswerSheetPage),
  ],
})
export class AnswerSheetPageModule {}
