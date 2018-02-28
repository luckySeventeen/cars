import {Component, OnInit} from '@angular/core';

import {Car} from './car';

const data = require('./data.json');

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];
  searchText: string;
  roadParts: number;
  trafficLight: any;
  passTheLight = false;
  carsOnTrack: any = [];
  speedLimits: any = [];

  constructor() {
    console.log(data);
    this.roadParts = data.distance / 5;
    this.speedLimits = data.speed_limits;
    this.trafficLight = data.traffic_lights[0];
    this.cars = data.cars.map(c => new Car(c.image, c.speed, c.description, c.name, c.id));
    // switch the trafficLight
    setInterval(() => {
      this.switchTrafficLight();
    }, this.trafficLight.duration);
  }

  public getRoadParts(num) {
    return new Array(num);
  }

  public addCarToList(item): void {
    if (item.isChecked) {
      if (this.carsOnTrack.length < 3) {
        this.carsOnTrack.push(item);
      } else {
        return;
      }
    } else {
      for (let i = 0; i <= this.carsOnTrack.length; i++) {
        if (this.carsOnTrack[i].id === item.id) {
          this.carsOnTrack.splice(i, 1);
        }
      }
    }
  }

  public carPosition(car, index) {
    const top = (index * 100) + 10;
    setInterval(() => {
      console.log('aaaa');
    }, 100);
    return {
      top: top + 'px'
    };
  }

public moveCars() {
    const car1 = document.getElementById('car0');
    console.log(car1);
    car1.style.left = '200';
}

  public signPosition(sign) {
    const left = ((sign.position / 10) * 2) * 100;
    return {
      left: left + 'px'
    };
  }

  public trafficLightPosition() {
    const left = ((this.trafficLight.position / 10) * 2) * 100;
    return {
      left: left + 'px'
    };
  }

  public switchTrafficLight() {
    this.passTheLight = !this.passTheLight;
  }

  ngOnInit() {
  }

}
