const express = require("express");
const app = express();
const bodyParser = require('body-parser');



app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

async function start(req, res) {
  
    res.render("index", {});
}

app.get("/",start);



/* Iniciar server */
async function startServer() {
    app.listen(3000);
    console.log("Server is up and running.\n Open http://localhost:3000 to start");
}

startServer();
