import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdmincreateFixtureStep1Page } from './admin-create-fixture-step1.page';

const routes: Routes = [
  {
    path: '',
    component: AdmincreateFixtureStep1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdmincreateFixtureStep1Page]
})
export class AdmincreateFixtureStep1PageModule {}
