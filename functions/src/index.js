"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions = require("firebase-functions");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld2 = functions.https.onRequest(function (request, response) {
    response.send("Hello from Firebase!\n\n");
});
