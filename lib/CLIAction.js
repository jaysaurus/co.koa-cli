'use strict';

const Component = require('./Component');
const Project = require('./Project');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'co.koa> '
});
const stampit = require('stampit');

const CLIAction = stampit({
  init ({ root, echoHandler, argv }) {
    const echo = echoHandler.load('cli');

    function createProject (cwd) {
      echo.log('createProject', cwd);
      rl.question(echo.raw('name'), name => {
        rl.question(echo.raw('repository'), repository => {
          rl.question(echo.raw('author'), author => {
            const result =
              Project(echoHandler.load('create'), root, cwd, rl)
                .build({ author, name, repository });
            if (result) echo.log('success');
            rl.close();
          });
        });
      });
    }

    Object.assign(this, {
      parse (key) {
        if (argv[key] !== undefined) {
          switch (key) {
            case 'create':
              let cwd = argv[key] ? argv[key] : process.cwd();
              createProject(cwd);
              return true;
            case 'createController':
            case 'createModel':
            case 'createService':
              Component(echoHandler.load('create')).build(key, argv[key]);
              return true;
          }
          rl.on('close', () => {
            console.log('Good bye.');
            process.exit(0);
          });
          return false;
        }
      }
    });
  }
});

module.exports = (root, echoHandler, argv) => CLIAction({ root, echoHandler, argv });