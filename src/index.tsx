import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const socket = require('socket.io-client')('http://127.0.0.1:7001')

socket.on('connect', () => {
  console.log('connect!');
//   socket.emit('res', 'hello world!');
//   socket.emit('chat', 'hello world!')
});

socket.on('res', (msg:any) => {
  console.log('res from server: %s!', msg)
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
