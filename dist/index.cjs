/**
 * name: rabbit937-lib
 * version: v0.0.0
 * description: mini ts lib
 * author: 
 * homepage: 
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function t(e=0,n=100,o="round"){return Math[o](Math.random()*(n-e)+e)}function r(){const e=t(0,1);return[!0,!1][e]}exports.getRandomBoolean=r;exports.getRandomNumber=t;
