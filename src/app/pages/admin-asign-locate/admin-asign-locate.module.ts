import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminAsignLocatePage } from './admin-asign-locate.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAsignLocatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminAsignLocatePage]
})
export class AdminAsignLocatePageModule {}
