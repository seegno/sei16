#!/usr/bin/env node

'use strict';

/**
 * Module dependencies.
 */

const app = require('../../server')();
const config = require('config');
const debug = require('debug')('sei16:server');
const program = require('commander');
const version = require(`${process.cwd()}/package.json`).version;

program
  .version(version)
  .option('-p , --port [port]', 'Set port', config.get('server.port'))
  .parse(process.argv);

/**
 * Start server.
 */

app.listen(program.port);

debug(`Listening on ${config.get('server.port')}`);
