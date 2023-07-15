const GameController = require('./GameController');

class App {
  constructor() {
    this.controller = new GameController();
  }

  play() {
    this.controller.run();
  }
}

const app = new App();

app.play();

module.exports = App;
