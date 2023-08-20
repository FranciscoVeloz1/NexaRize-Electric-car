import http from "http";
import morgan from "morgan";
import express from "express";
import routes from "./routes";

// Initializations
const app = express();
const server = new http.Server(app);

// Settings
app.set("port", process.env.PORT || 5000);

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(routes);

// Starting
server.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
