const shell = require('shelljs');

class RunElectron {
  constructor() {
    this.isRunning = false;
  }
  apply(compiler) {
    compiler.hooks.done.tap('✨hello my plugin', stats => {
      if (this.isRunning) return;
      shell.echo('✨[development]run electron✨');
      this.isRunning = true;
    });
  }
}

module.exports = RunElectron;
