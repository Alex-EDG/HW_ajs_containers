export default class ErrorRepository {
  constructor() {
    this.errorsList = new Map();
  };

  translate(code) {
    if ([...this.errorsList.keys()].includes(code)) {
      return this.errorsList.get(code);
    } else {
      return 'Unknown error';
    };
  };
};
