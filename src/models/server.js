const express = require("express");
const cors = require("cors");
const { socketController } = require("../controllers/socket.controller");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require("http").createServer(this.app);
        this.io = require("socket.io")(this.server);

        this.paths = {};
        this.middlewares();
        this.routes();
        this.sockets();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // public directory
        this.app.use(express.static("src/public"));
    }

    routes() {
        // this.app.use(this.paths.users, require("../routes/user.router"));
    }

    sockets() {
        this.io.on("connection", socketController);
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Listening on http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;
