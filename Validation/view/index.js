const express = require('express');
let app = express()

app.use(express.json())
app.use("/api/users")

app.listen(4000,()=>{
    console.log("Server runnin")
})