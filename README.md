# Nodes Rapid Prototype generator

Yeoman generator that scaffolds out a front-end base for rapid prototyping.

## Features

* CSS Autoprefixing
* Built-in live-reload server
* Built-in multi-device preview server with [browser-sync](https://github.com/shakyShane/browser-sync).
* Automatically compile Sass and Compass
* Automatically wire up your Bower components with [bower-install](https://github.com/stephenplusplus/grunt-bower-install).
* Zurb's [Foundation 5](http://foundation.zurb.com/) wired in with bower 
* Nodes Front-end modular SCSS methology

## Getting Started

- Install: `npm install -g git+https://github.com/dennishn/generator-prototype.git`
- Run: `yo prototype`
- Type in your IP adress (windows: `ipconfig` | mac/linux: `ifconfig`
- Run `grunt serve` to use the live-reload server


## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.
