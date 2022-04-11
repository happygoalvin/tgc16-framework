'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  // db.createTable takes in 2 Arg.
  // 1. name of table
  // 2. an object that defines the col.
  // Obj has key value pairs
  // the key is name of col.
  // value defines properties of the col.
  return db.createTable('products', {
    'id': {
      'type': 'int',
      'unsigned': true,
      'primaryKey': true,
      'autoIncrement': true
    },
    // name varchar(100) not null
    'name': {
      'type': 'string',
      'length': 100,
      'notNull': true
    },
    // cost int unsigned default=0
    'cost': {
      'type': 'int',
      'unsigned': true,
      'default': 0
    },
    // description text
    'description': 'text'
  })
  // => 
  /* create table products  */
};

exports.down = function (db) {
  return db.dropTable('products')
};

exports._meta = {
  "version": 1
};