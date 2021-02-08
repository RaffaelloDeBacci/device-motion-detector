import { Component, OnInit } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';

declare const navigator: any; 

@Component({
  selector: 'app-motion-detector',
  templateUrl: './motion-detector.component.html',
  styleUrls: ['./motion-detector.component.scss'],
})
export class MotionDetectorComponent implements OnInit {

  private active : boolean;
  private accellerometerWatchID : any;
  private accellerometerSubscription : any;

  constructor(private gyroscope: Gyroscope, private deviceMotion: DeviceMotion) { 
    this.active = false;
    this.accellerometerSubscription = 0;
  }

  ngOnInit() {}

  recordData(){
    this.active = !this.active;

    if( this.active ){
      this.recordAccellerationData();
    } else {
      this.stopRecordingAccellerationData();
    }
  }

  recordAccellerationData(){
    this.accellerometerSubscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
      console.log(acceleration);
    });
  }



  stopRecordingAccellerationData(){
    this.accellerometerSubscription.unsubscribe();
  }

} 
