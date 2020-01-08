//http://localhost:8000/
function handleRoot_get(req,res){
    res.send("Welcome to Node program");
}

module.exports={root_get:handleRoot_get};