const GameController = require('./GameController');
const runGenerator = require('./utils/runGenerator');

class App {
  constructor() {
    this.controller = new GameController();
  }

  play() {
    runGenerator(this.controller.run.bind(this.controller));
  }
}

const app = new App();

app.play();

module.exports = App;
