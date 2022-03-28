const express = require("express"),
    app = express();

require('dotenv').config();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req,res) => {
	res.render("./index");
});


app.listen(process.env.PORT, function(){
	console.log("App is running on " + process.env.PORT);
});