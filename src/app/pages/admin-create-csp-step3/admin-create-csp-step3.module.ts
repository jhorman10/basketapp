import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminCreateCSPStep3Page } from './admin-create-csp-step3.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCreateCSPStep3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminCreateCSPStep3Page]
})
export class AdminCreateCSPStep3PageModule {}
