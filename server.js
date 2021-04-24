const jsonServer = require("json-server");
const PORT = process.env.PORT || 3000;

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(router);

server.listen(PORT);
