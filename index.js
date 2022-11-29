const express = require("express");

const Server = express();

Server.copy("/login", (req, res) => res.send("login page"))
Server.post("/home", (req, res) => res.send("home page"))
Server.put("/about", (req, res) => res.send("about page"))
Server.delete("/signup", (req, res) => res.send("signup page"))
Server.get("/", (req, res) => res.send("index page"))
Server.patch("*", (req, res) => res.send("OOOPS 404 PAGE NOT FOUND"))


Server.listen(3002, "localhost", ()=>{console.log("server is ready")});
