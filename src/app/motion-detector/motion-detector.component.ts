import { Component, OnInit } from '@angular/core';
import { DeviceMotion } from '@ionic-native/device-motion/ngx';
import { Gyroscope  } from '@ionic-native/gyroscope/ngx';

@Component({
  selector: 'app-motion-detector',
  templateUrl: './motion-detector.component.html',
  styleUrls: ['./motion-detector.component.scss'],
})
export class MotionDetectorComponent implements OnInit {

  constructor(private deviceMotion: DeviceMotion, private gyroscope: Gyroscope) { }

  ngOnInit() {}

  recordData(){
    console.log(this.deviceMotion);
    console.log(this.gyroscope);
  }

} 
