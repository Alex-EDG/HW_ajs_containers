export default class Settings {
  constructor() {

    this.settingsList = {
      'theme': ['dark', 'light', 'gray'],
      'music': ['trance', 'pop', 'rock', 'chillout', 'off'],
      'difficulty': ['easy', 'normal', 'hard', 'nightmare']
    };

    this.defaultSettings = new Map([
      ['theme', this.settingsList['theme'][0]],
      ['music', this.settingsList['music'][0]],
      ['difficulty', this.settingsList['difficulty'][0]]
    ]);

    this.userSettings = new Map();
  };

  set(key, value) {
    if ([...Object.keys(this.settingsList)].includes(key)) {
      if ([...this.settingsList[key]].includes(value)) {
        this.userSettings.set(key, value);
      } else {
        throw new Error(`Недопустимо для параметра ${key} устанавливать значение ${value}`);
      };
    } else {
      throw new Error(`Неизвестный параметр ${key}`);
    };
  };

  get() {
    const settings = [];
    [...Object.keys(this.settingsList)].forEach( key => {
      settings.push([
        key, (this.userSettings.get(key)) ? this.userSettings.get(key) : this.defaultSettings.get(key)
      ]);
    });
    return new Map(settings);
  };
};
