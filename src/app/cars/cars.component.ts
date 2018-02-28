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
  carsList: any = [];

  constructor() {
    console.log(data);
    this.roadParts = data.distance / 5;
    this.cars = data.cars.map(c => new Car(c.image, c.speed, c.description, c.name, c.id));
    console.log(this.cars);
  }

  public getRoadParts(num) {
    return new Array(num);
  }

  public addCarToList(item): void {
    if (item.isChecked) {
      if (this.carsList.length < 3) {
        this.carsList.push(item);
        console.log(this.carsList);
      } else {
        return;
      }
    } else {
      for (let i = 0; i <= this.carsList.length) {
        if (this.carsList[i].id === item.id) {
          this.carsList.splice(i, 1);
        }
      }
      console.log(this.carsList);
    }
  }

  public carPosition(car, index) {
    const top = (index * 100) + 10;
    return {
      top: top + 'px'
    };
  }

  ngOnInit() {
  }

}
