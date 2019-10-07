const { remote } = require("electron");

setTimeout(function() {
  console.log("crashing!");
  remote.process.crash();
}, 1000);
