"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
require("dotenv/config");
var postEntry = function (entry) {
    axios_1["default"]
        .post(process.env.API_ENDPOINT + "?key=" + process.env.API_KEY, JSON.stringify({
        time_entry: entry
    }), { headers: {
            'Content-Type': 'application/json'
        } }).then(function (res) {
        console.log(res.data);
    });
};
exports["default"] = postEntry;
