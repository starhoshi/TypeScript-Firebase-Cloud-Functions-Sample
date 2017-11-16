"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions = require("firebase-functions");
exports.helloWorld = functions.https.onRequest(function (request, response) {
    response.send("Hello from Firebase!\n\n");
});
