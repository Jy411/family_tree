import fetch from "node-fetch";

export default class Person {
  constructor(name, dateOfBirth) {
    this._gender;
    this._name = name;
    this._dateOfBirth = dateOfBirth;
    this._height = 0;
    this._age = this.calculateAge();
    this._hobbies = [];
  }

  getHeightDiff(member) {
    return this._height - member.height;
  }

  getRandomCatFact = async () => {
    let catFact;
    try {
      await fetch("https://cat-fact.herokuapp.com/facts")
        .then((response) => response.json())
        .then((data) => {
          // get random object from array
          const randomFactObj = data[Math.floor(Math.random() * data.length)];
          // console.log(randomFactObj.text);
          catFact = randomFactObj.text;
        });
    } catch (e) {
      console.log("Error: ", e);
    }
    return catFact;
  };

  calculateAge() {
    // calculate age
    const today = new Date();
    const birthDate = new Date(this._dateOfBirth);
    return today.getFullYear() - birthDate.getFullYear();
  }

  getTotalSiblings() {
    // get total siblings
    return this._siblings.length;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
  }

  get dateOfBirth() {
    return this._dateOfBirth;
  }

  // DD-MM-YYYY
  set dateOfBirth(value) {
    this._dateOfBirth = value;
    // calculate age
    const today = new Date();
    const birthDate = new Date(value);
    const age = today.getFullYear() - birthDate.getFullYear();
    this._age = age;
    return age;
  }

  get hobbies() {
    return this._hobbies;
  }

  set hobbies(value) {
    this._hobbies = value;
  }

  get gender() {
    return this._gender;
  }

  set gender(value) {
    this._gender = value;
  }

  getDetails() {
    return (
      "My name is " +
      this._name +
      " and I am a " +
      this._age +
      " years old " +
      this._gender +
      ". I am " +
      this._height +
      "cm tall."
    );
  }
}
