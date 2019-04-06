import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminCreteFixtureStep1Page } from './admin-create-fixture-step1.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCreteFixtureStep1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminCreteFixtureStep1Page]
})
export class AdminCreteFixtureStep1PageModule {}
