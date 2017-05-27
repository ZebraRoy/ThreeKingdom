// Setup basic express server
import express from 'express';
import http from 'http';
import path from 'path';
import watch from 'node-watch';
import socketIO from 'socket.io';
import opener from 'opener';
import webpack from 'webpack';
import webpackConfig from '../public/webpack.config';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.PORT || 8888;
const compiler = webpack(webpackConfig);

server.listen(port);

// Routing
app.use(express.static(path.join(__dirname, '..', 'public')));

compiler.run(function build () {
  io.emit('refresh');
});

watch(path.join(__dirname, '..', 'public', 'src'), { recursive: true }, function () {
  compiler.run(function build () {
    io.emit('refresh');
  });
});

opener('http://localhost:' + port + '/dev.html');
