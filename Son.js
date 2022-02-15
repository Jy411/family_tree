import Person from "./Person.js";

export default class Son extends Person {
  constructor(name, dateOfBirth) {
    super(name, dateOfBirth);
    this._gender = "male";
    this._height = this.calculateHeight();
    this._hobbies = ["hockey"];
  }

  calculateHeight() {
    // age * 10cm
    this._height = this._age * 10;
    if (this._height > 180) {
      return (this._height = 180);
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
