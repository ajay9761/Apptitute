import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserValuePage } from './user-value';

@NgModule({
  declarations: [
    UserValuePage,
  ],
  imports: [
    IonicPageModule.forChild(UserValuePage),
  ],
})
export class UserValuePageModule {}
