import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DeviceMotion } from '@ionic-native/device-motion/ngx';
import { Gyroscope } from '@ionic-native/gyroscope/ngx';

import { IonicModule } from '@ionic/angular';

import { MotionDetectorComponent } from './motion-detector.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [MotionDetectorComponent],
  exports: [MotionDetectorComponent],
  providers: [DeviceMotion, Gyroscope ]
})
export class MotionDetectorComponentModule {}
