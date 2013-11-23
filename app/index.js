'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var PrototypeGenerator = module.exports = function PrototypeGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(PrototypeGenerator, yeoman.generators.Base);

PrototypeGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'input',
    name: 'ipAdress',
    message: 'Please enter your IP Adress so I can configure browser sync for you:'
  }];

  this.prompt(prompts, function (props) {
    this.ipAdress = props.ipAdress;

    cb();
  }.bind(this));
};

PrototypeGenerator.prototype.gruntfile = function gruntfile() {
  this.template('Gruntfile.js');
};

PrototypeGenerator.prototype.packageJSON = function packageJSON() {
  this.template('_package.json', 'package.json');
};

PrototypeGenerator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
};

PrototypeGenerator.prototype.bower = function bower() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('_bower.json', 'bower.json');
};

PrototypeGenerator.prototype.editorConfig = function editorConfig() {
  this.copy('editorconfig', '.editorconfig');
};

PrototypeGenerator.prototype.editorConfig = function editorConfig() {
  this.copy('index.html', 'app/index.html');
};

PrototypeGenerator.prototype.mainStyles = function mainStyles() {
  this.directory('scss', 'app/scss');
};

PrototypeGenerator.prototype.mainScripts = function mainScripts() {
  this.directory('scripts', 'app/scripts');
};

PrototypeGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/images');
};
