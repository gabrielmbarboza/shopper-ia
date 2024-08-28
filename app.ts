// const express = require('express');
import express from 'express'
import cors from 'cors';
import routes from './routes';

class App {
    express: any;

    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        const allowedOrigins = ['*'];
        const corsOptions: cors.CorsOptions = {
            origin: allowedOrigins
        };

        this.express.use(express.json());

        this.express.use(cors(corsOptions));
    }

    routes() {
        this.express.use(routes);
    }
}

export default new App().express;