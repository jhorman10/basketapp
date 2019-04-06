import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdmincreateFixtureStep2Page } from './admin-create-fixture-step2.page';

const routes: Routes = [
  {
    path: '',
    component: AdmincreateFixtureStep2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdmincreateFixtureStep2Page]
})
export class AdmincreateFixtureStep2PageModule {}
