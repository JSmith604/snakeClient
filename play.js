const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
connect();

setupInput();



let connection; 

const setupInput = function(conn) {
  connection = conn;
}
