import express from 'express';
import "@shared/container";
import { createServer } from 'http';
import { join } from 'path';
import "express-async-errors";

import { router } from './routes';
import { errorHandler } from '@shared/errors/handlers/errorHandler';

const app = express();

const http = createServer(app);

// Static config
app.use(express.static(join(__dirname, '..', '..', '..', '..', 'public')));
app.set("views", join(__dirname, '..', '..', '..', '..', 'public'));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// HTML page render
app.get("/pages/client", (request, response) => {
    return response.render("html/client.html");
});

app.get("/pages/admin", (request, response) => {
    return response.render("html/admin.html");
});

app.use(express.json());
app.use(router);

app.use(errorHandler);

export { http };
