import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminCreteCSPFsPage } from './admin-crete-csp-fs.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCreteCSPFsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminCreteCSPFsPage]
})
export class AdminCreteCSPFsPageModule {}
