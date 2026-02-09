export default class Team {
  constructor() {
    this.members = new Set();
  };

  add(newMember) {
    if (this.members.has(newMember)) {
      throw new Error ('Не возможно добавить, объект уже присутствует в команде');
    } else {
      this.members.add(newMember);
    };
  };

  addAll(...newMembers) {
    newMembers.forEach( newMember => {
      this.add(newMember);
    });
  };

  toArray() {
    return [...this.members];
  };
};
