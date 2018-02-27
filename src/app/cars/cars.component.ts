import {Component, OnInit} from '@angular/core';
import { Car } from './car';
const data = require('./data.json');

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];
  constructor() {
    console.log(data);
    this.cars = data.cars.map(c => new Car(c.image, c.speed, c.description, c.name, c.id));

  }

  ngOnInit() {
  }

}
