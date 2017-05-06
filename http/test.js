'use strict'
var fs = require('fs');

var rs = fs.createReadStream('./http/web/http.js');
var ws = fs.createWriteStream('./http/http.js');
rs.pipe(ws);
