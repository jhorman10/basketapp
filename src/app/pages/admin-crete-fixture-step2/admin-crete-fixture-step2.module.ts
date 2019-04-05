import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminCreteFixtureStep2Page } from './admin-crete-fixture-step2.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCreteFixtureStep2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminCreteFixtureStep2Page]
})
export class AdminCreteFixtureStep2PageModule {}
