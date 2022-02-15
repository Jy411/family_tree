export default class Family {
  constructor() {
    this._members = [];
  }

  get members() {
    return this._members;
  }

  set members(value) {
    this._members = value;
  }

  getFamilyMembersByAge(sort) {
    return this._members
      .sort((a, b) => {
        if (sort === "asc") {
          return a.age - b.age;
        }
        return b.age - a.age;
      })
      .map((member) => `${member.name} - ${member.age} years old`);
  }

  getFamilyMembersName(sort) {
    // sort array by name ascending
    if (sort === "asc") {
      this._members.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    // sort by name descending
    if (sort === "dsc") {
      this._members.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    }

    return this._members.map((member) => member.name);
  }

  getFamilySize() {
    return this._members.length;
  }

  getAgeDifference(member1, member2) {
    // get diff between two dates in year and month
    const diff = Math.abs(
      new Date(member1.dateOfBirth) - new Date(member2.dateOfBirth)
    );
    const diffYears = Math.floor(diff / 31536000000);
    const diffMonths = Math.floor((diff % 31536000000) / 2628000000);

    return (
      "Age difference: " + diffYears + " years and " + diffMonths + " months"
    );
  }
}
