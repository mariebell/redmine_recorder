"use strict";
exports.__esModule = true;
var postEntry_1 = require("./postEntry");
var entries = [
    {
        issue_id: "18015",
        spent_on: "2022-02-01",
        hours: "1"
    },
];
entries.map(function (entry) { return (0, postEntry_1["default"])(entry); });
