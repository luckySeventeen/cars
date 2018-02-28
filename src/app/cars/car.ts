export class Car {
  public image: string = null;
  public speed: number;
  public description: string = null;
  public name: string = null;
  public id: number;
  public isChecked = false;

  constructor(image: string, speed: number, description: string, name: string, id: number) {
    this.image = image;
    this.speed = speed;
    this.description = description;
    this.name = name;
    this.id = id;
  }
}
