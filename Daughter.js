import Person from "./Person.js";

export default class Daughter extends Person {
  constructor(name, dateOfBirth) {
    super(name, dateOfBirth);
    this._gender = "female";
    this._height = this.calculateHeight();
    this._hobbies = ["football"];
  }

  calculateHeight() {
    // age * 8.5cm
    this._height = this._age * 8.5;
    if (this._height > 175) {
      return (this._height = 175);
    }
    return this._height;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
  }
}
