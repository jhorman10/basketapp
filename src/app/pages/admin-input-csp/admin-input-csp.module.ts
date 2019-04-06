import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminInputCSPPage } from './admin-input-csp.page';

const routes: Routes = [
  {
    path: '',
    component: AdminInputCSPPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminInputCSPPage]
})
export class AdminInputCSPPageModule {}