var R = require('ramda');
var P = require('bluebird-promisell');

var log = function(_store) {
  return function(promise) {
    clean(_store);
    return promise.then(function(resolved) {
      console.log('promise resolved. Use the following command to see the resolved data:\n' +
        '_store.data');
      _store.data = resolved;
      return resolved;
    }, function(err) {
      console.log('Promise failed. Use the following command to see the rejected error:\n' +
        '_store.error');
      _store.error = err;
      throw err;
    });
  };
};

var clean = function(_store) {
  delete _store.data;
  delete _store.error;
};

var _store = {};
_store.log = log(_store);
_store.clean = clean;

var rerequire = function(require, path) {
  delete require.cache[require.resolve(path)];
  return require(path);
};

var fs = require('fs');
var _save = function(json, filename) {
  fs.writeFileSync(filename || '.session.json', JSON.stringify(json, null, 2));
  return json;
};
var _load = function(filename) {
  return require('./' + (filename || '.session.json'));
};

global._store = _store;
global.R = R;
global.P = P;
global.rerequire = rerequire;
global._save = _save;
global._load = _load;

require('repl').start('> ');
