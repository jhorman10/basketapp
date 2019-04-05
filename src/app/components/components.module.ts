import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderbuttonsComponent } from './headerbuttons/headerbuttons.component';

@NgModule({
  declarations: [
    HeaderbuttonsComponent
  ],
  exports: [
    HeaderbuttonsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})

export class ComponentsModule { }
