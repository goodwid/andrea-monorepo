#!/usr/bin/env node

/* eslint-disable no-console */

require('dotenv').config(__dirname + '/packages/oneroom/.env');
const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const password = process.env.FTP_PASSWORD;
const user = process.env.FTP_USERNAME;
const host = process.env.FTP_HOST;

const config = {
  user,
  password,
  host,
  port: 21,
  localRoot: __dirname + '/build/',
  remoteRoot: '/httpdocs',
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ['*'],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: true,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true
};

// use with promises
ftpDeploy
  .deploy(config)
  .then(res => console.log('finished:', res))
  .catch(err => console.log(err));
