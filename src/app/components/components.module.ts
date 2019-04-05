import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderbuttonsComponent } from './headerbuttons/headerbuttons.component';
import { TimeLineComponent } from './time-line/time-line.component';

@NgModule({
  declarations: [
    HeaderbuttonsComponent,
    TimeLineComponent
  ],
  exports: [
    HeaderbuttonsComponent,
    TimeLineComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})

export class ComponentsModule { }
