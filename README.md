[![Build Status](https://travis-ci.org/jaysaurus/co-koa-cli.svg?branch=master)](https://travis-ci.org/jaysaurus/co-koa-cli)
[![Coverage Status](https://coveralls.io/repos/github/jaysaurus/co-koa-cli/badge.svg?branch=master)](https://coveralls.io/github/jaysaurus/co-koa-cli?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/jaysaurus/co-koa-cli.svg)](https://greenkeeper.io/)
[![Test for Vulnerabilities](https://snyk.io/test/github/jaysaurus/co-koa-cli/badge.svg)](https://snyk.io/test/github/jaysaurus/co-koa-cli)

<a title="Co.Koa on github" href="https://jaysaurus.github.io/Co.Koa">
<img alt="Co.Koa header" title="Co.Koa" style="margin: 0 15%; width: 70%" src="https://raw.githubusercontent.com/jaysaurus/Co.Koa/master/siteStrapCoKoa.png?sanitize=true" />
</a>

# co-koa-cli

A Command Line Interface for installing and managing [Co.Koa MVC](http://cokoajs.com) applications.

**Installation of co-koa-cli**
co-koa-cli is available to install on NPM:
`npm i co-koa-cli -g`

**Installing a new Co.Koa project on your system**
with the co-koa-cli installed, in terminal, simply navigate to a desired directory in terminal and type:
`co-koa-cli --create`

fill in a few details (these can be changed afterwards by modifying your project's package.json)
once installation is finished, type `npm install` to download the project's core dependencies.

That's it, you're all setup!

**note:** By default, Co.Koa ships with the [co-koa-mongoose-plugin](https://www.npmjs.com/package/co-koa-mongoose-plugin).  This will use `'mongodb://localhost:27017/coKoa'` as its connection string. for more information on this and other aspects of co-koa and Mongo, see the links below:

**Useful Links**
- [cokoa installation & execution wiki](https://github.com/jaysaurus/Co.Koa/wiki)
- [cokoajs documentation](http://cokoajs.com)
- [co-koa-mongoose-plugin](https://github.com/jaysaurus/co-koa-mongoose-plugin/)
- <a href="https://www.mongodb.com/">mongoDB</a>

**CLI Options**
```
  --version                Show version number                         [boolean]

  --create                 build a new Co.Koa application in your current
                           working directory or, if supplied, an absolute
                           directory. Ensure you have permission to write!
                                                                        [string]

  --createController       creates a Co.Koa Controller. Must be supplied with a
                           name (without the word "Controller" appended to it).
                                                                        [string]

  --createIntegrationTest  creates a Co.Koa Jest Integration Test. Must be
                           supplied with a name.                        [string]

  --createModel            creates a Co.Koa Model. Must be supplied with a name.
                                                                        [string]

  --createService          creates a Co.Koa Service. Must be supplied with a
                           name (without the word "Service" appended to it).
                                                                        [string]

  --createUnitTest         creates a Co.Koa Jest Unit Test. Must be supplied
                           with a name.                                 [string]

  --help, -h               Show help                                   [boolean]
```

for more information on **Co.Koa** and its installation, navigate to <a href="https://github.com/jaysaurus/Co.Koa">the Co.Koa github page</a>.
