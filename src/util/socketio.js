import io from 'socket.io-client'
let socket = io.connect('/');
module.exports = socket;