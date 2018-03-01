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
  animationSpeed: number;
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
    const left = 10;
    return {
      top: top + 'px',
      left: left + 'px'
    };
  }
  // TODO figure out better way to handle logic
  // TODO add car stop at traffic light
  public moveCars(): void {
    const car1 = document.getElementById('car0');
    const car2 = document.getElementById('car1');
    const car3 = document.getElementById('car2');
    const firstSignPosition = ((this.speedLimits[0].position / 10) * 2) * 100;
    const secondSignPosition = ((this.speedLimits[1].position / 10) * 2) * 100;
    let firstCarLeft = 10;
    let secondCarLeft = 10;
    let thirdCarLeft = 10;
    let firstCarSpeed = (this.carsOnTrack[0].speed) * 0.1;
    let secondCarSpeed = (this.carsOnTrack[1].speed) * 0.1;
    let thirdCarSpeed = (this.carsOnTrack[2].speed) * 0.1;
    const firstCarInterval = setInterval(() => {
      firstCarLeft += firstCarSpeed;
      car1.style.left = firstCarLeft + 'px';
      if (firstCarLeft >= firstSignPosition) {
        firstCarSpeed = 6;
      }
      if (firstCarLeft >= secondSignPosition) {
        firstCarSpeed = 8;
      }
      if (firstCarLeft >= 910) {
        clearInterval(firstCarInterval);
      }
    }, this.animationSpeed);
    const secondCarInterval = setInterval(() => {
      secondCarLeft += secondCarSpeed;
      car2.style.left = secondCarLeft + 'px';
      if (secondCarLeft >= firstSignPosition) {
        secondCarSpeed = 6;
      }
      if (firstCarLeft >= secondSignPosition) {
        firstCarSpeed = 8;
      }
      if (secondCarLeft >= 910) {
        clearInterval(secondCarInterval);
      }
    }, this.animationSpeed);
    const thirdCarInterval = setInterval(() => {
      thirdCarLeft += thirdCarSpeed;
      car3.style.left = thirdCarLeft + 'px';
      if (thirdCarLeft >= firstSignPosition) {
        thirdCarSpeed = 6;
      }
      if (firstCarLeft >= secondSignPosition) {
        firstCarSpeed = 8;
      }
      if (thirdCarLeft >= 910) {
        clearInterval(thirdCarInterval);
      }
    }, this.animationSpeed);

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

  public switchTrafficLight(): void {
    this.passTheLight = !this.passTheLight;
  }

  ngOnInit() {
  }

}
