import http from "http";
import morgan from "morgan";
import express from "express";
import routes from "./routes";
import { join } from "path";

// Initializations
const app = express();
const server = new http.Server(app);

// Settings
app.set("port", process.env.PORT || 5000);

//Public
app.use(express.static(join(__dirname, "public")));

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(routes);

app.get("/*", function (req, res) {
  res.sendFile(join(__dirname, "public/index.html"), (err) => {
    if (err) res.status(500).send("error " + err.message);
  });
});

// Starting
server.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
