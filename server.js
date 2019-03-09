const express = require("express");
const app = express()
const config = require("./config");
const user = require("./data/user")




app.get("/users", (req, res) => {
    res.json(user)
})
app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`)
})
