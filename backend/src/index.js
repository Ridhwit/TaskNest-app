"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send("Welcome to my app!");
});
app.listen(8000, function () {
    console.log("Server started on port 8000");
});
