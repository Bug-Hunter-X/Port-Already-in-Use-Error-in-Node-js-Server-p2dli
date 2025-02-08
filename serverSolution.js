const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200); 
  res.end('Hello World!');
});

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

const onError = (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    process.exit(1);
  } else {
    console.error(error);
    process.exit(1);
  }
};

startServer();
server.on('error', onError);

