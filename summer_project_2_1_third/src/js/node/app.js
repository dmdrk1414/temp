import express from "express";
import http from "http";
import mainRouter from "./routes/index.js";

const app = express();

// app.use('/', (req, res) => {
//   res.send('hello');
// });
app.use(mainRouter);

http.createServer(app).listen(5000);
