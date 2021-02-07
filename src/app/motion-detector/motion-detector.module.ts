import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MotionDetectorComponent } from './motion-detector.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [MotionDetectorComponent],
  exports: [MotionDetectorComponent]
})
export class MotionDetectorComponentModule {}
