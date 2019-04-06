import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminCreateCspFsPage } from './admin-create-csp-fs.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCreateCspFsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminCreateCspFsPage]
})
export class AdminCreateCspFsPageModule {}
