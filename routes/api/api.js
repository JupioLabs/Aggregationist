var express = require('express');
var router = express.Router();

function isAuthorized(req, res, next) {
    var auth_user = process.env.AUTH_USER || "a";
    var auth_pass = process.env.AUTH_PASS || "a";
    var auth = req.headers['authorization'];

    if (auth) {
        var buf = new Buffer(auth.split(' ')[1], 'base64');
        var plain_auth = buf.toString();
        var creds = plain_auth.split(':');
        var username = creds[0];
        var password = creds[1];

        console.log("Attempted secure API access by: " + username);

        if (username === auth_user && password === auth_pass) {
            console.log("Access granted to: " + username);
            console.log("IP Logged: " + req.ip);
            return next();
        }
        else {
            console.log("Access denied to: " + username);
            console.log("IP Logged: " + req.ip);
            return res.status(401).json({
                err: 401,
                message: "Not authorized, credentials incorrect. IP logged: " + req.ip
            });
        }
    }
    else {
        console.log("Access denied to secure API, no credentials provided");
        console.log("IP logged: " + req.ip);
        res.status(401).json({
            err: 401,
            message: "Not authorized, credentials not provided. IP logged: " + req.ip
        });
    }
}

router
    .get('/', function (req, res) {
        res.json({ message: "Equator Admin API" });
    })

    .get('/user/:email', isAuthorized, function (req, res) {
        res.json({ message: `email: ${req.params.email}`});
    })

 module.exports = router;
