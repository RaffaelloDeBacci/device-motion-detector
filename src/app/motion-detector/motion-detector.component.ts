import { Component, OnInit } from '@angular/core';
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
  private accelerometerOptions : any;

  constructor(private gyroscope: Gyroscope) { 
    this.active = false;
    this.accellerometerWatchID = 0;
    this.accelerometerOptions = { frequency: 3000 };
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
    this.accellerometerWatchID = navigator.accelerometer.watchAcceleration(this.accelerometerSuccess, this.accelerometerError, this.accelerometerOptions);
  }

  accelerometerSuccess(acceleration){
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
  }

  accelerometerError(error) {
    console.log(error);
  }

  stopRecordingAccellerationData(){
    navigator.accelerometer.clearWatch( this.accellerometerWatchID );
  }

} 
