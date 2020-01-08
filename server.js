
let appModule=require("./app")// given in path so its file path/module
let handlers=require("./requestHandlers");
const express = require('express')

const app = express();
app.use(express.static(__dirname));
// app.use("/", function(req,res,next){

//     console.log("Middleware3");
//     next();// passing the request to next middleware
// });

// app.use("/", function(req,res,next){ //order app.use is very imp

//     console.log("Middleware1");
//     next();
// });

// app.use("/", function(req,res,next){

//     console.log("Middleware2");
//     res.send("Response from middleware2");
// });

// app.use(express.static(_dirname)); // response for all static resources like html, css etc from current directory i.e __dirname ->global member 
                                        //in node that gives current directory name
// app.get("/",handlers.root_get);

app.listen(8000, appModule.appInit);
