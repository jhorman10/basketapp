import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminCreateCSPStep2Page } from './admin-create-csp-step2.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCreateCSPStep2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminCreateCSPStep2Page]
})
export class AdminCreateCSPStep2PageModule {}
