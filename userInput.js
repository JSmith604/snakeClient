

let connection;


const handleUserInput = function(key) {
    // conn.write('Move: up');
  if (key === 'w') {
    connection.write('Move: up');
  } 
  if (key === 'b') {
    connection.write('Say: bird');
  }
  if (key === 'p') {
    connection.write('Say: parrot')
  }
  if (key === 'c') {
    connection.write('Say: cat')
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === '\u0003') {
    process.exit();
  }
}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

module.exports = {setupInput};

