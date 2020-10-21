'use strict'
const app = require("./app");
const ip = require("ip");
const port = 8080;

app.listen(port, () => {
    console.log(`API REST corriendo en http://${ip.address()}:${port}/`)
});
