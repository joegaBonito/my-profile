// src/server.js

// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const Landing = require('./components/landing/landing');
// const template = require('./template');
const express = require('express');
const path = require('path');
const server = express();

// server.use('/assets', express.static('assets'));
//
// server.get('/', (req, res) => {
//   const isMobile = true; // assume it's mobile
//   const initialState = { isMobile };
//   const appString = ReactDOMServer.renderToString(<Landing {...initialState}/>);
//
//   res.send(template({
//     body: appString,
//     title: 'Profile: Joe Y. Jung',
//     initialState: JSON.stringify(initialState)
//   }));
// });

server.use(express.static('dist'));

server.get('*',(req,res) => {
  res.sendFile(path.join(__dirname +'/dist/index.html'));
})

server.listen(3080,()=> {
  console.log('Server started in the port 3080');
});
