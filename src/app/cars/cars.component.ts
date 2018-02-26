import {Component, OnInit} from '@angular/core';

const data = require('./data.json');

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor() {
    console.log(data);
  }

  ngOnInit() {
  }

}
