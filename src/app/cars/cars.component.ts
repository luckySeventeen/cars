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
  carsOnTrack: any = [];
  speedLimits: any = [];

  constructor() {
    console.log(data);
    this.roadParts = data.distance / 5;
    this.speedLimits = data.speed_limits;
    console.log(this.speedLimits)
    this.cars = data.cars.map(c => new Car(c.image, c.speed, c.description, c.name, c.id));
    console.log(this.cars);
  }

  public getRoadParts(num) {
    return new Array(num);
  }

  public addCarToList(item): void {
    if (item.isChecked) {
      if (this.carsOnTrack.length < 3) {
        this.carsOnTrack.push(item);
        console.log(this.carsOnTrack);
      } else {
        return;
      }
    } else {
      for (let i = 0; i <= this.carsOnTrack.length; i++) {
        if (this.carsOnTrack[i].id === item.id) {
          this.carsOnTrack.splice(i, 1);
        }
      }
      console.log(this.carsOnTrack);
    }
  }

  public carPosition(car, index) {
    const top = (index * 100) + 10;
    return {
      top: top + 'px'
    };
  }

  public signPosition(sign) {
    const left = ((sign.position / 10) * 2) * 100;
    return {
      left: left + 'px'
    };
  }

  ngOnInit() {
  }

}
