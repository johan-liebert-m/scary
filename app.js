const express = require("express")
const app = express()

app.use(express.static(__dirname))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/scary.html")
})

app.listen(80)
console.log("server running on 80")
