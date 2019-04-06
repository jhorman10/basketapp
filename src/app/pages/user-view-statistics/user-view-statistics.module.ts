import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserViewStatisticsPage } from './user-view-statistics.page';

const routes: Routes = [
  {
    path: '',
    component: UserViewStatisticsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserViewStatisticsPage]
})
export class UserViewStatisticsPageModule {}
