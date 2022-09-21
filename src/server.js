import http from "http";
import WebSocket from "ws";
import express from "express";
//express - set the views and render
//rest - websocket
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req,res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log('Listening on http://localhost:3000');

const server = http.createServer(app); // i have access
const wss = new WebSocket.Server({ server });
//http, websocket on the same port
//app.listen(3000,handleListen);
server.listen(3000,handleListen);