#!/usr/bin/env node

'use strict';

/**
 * Module dependencies.
 */

const app = require('../../api')();
const config = require('config');
const debug = require('debug')('sei16:api');
const program = require('commander');
const version = require(`${process.cwd()}/package.json`).version;

program
  .version(version)
  .option('-p , --port [port]', 'Set port', config.get('api.port'))
  .parse(process.argv);

/**
 * Start server.
 */

app.listen(program.port);

debug(`Listening on ${config.get('api.port')}`);
