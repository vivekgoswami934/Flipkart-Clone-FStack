


const jwt = require("jsonwebtoken");


const authentication = (req, res, next) => {
   
  if (!req.headers.authorization) { 
   
    return res.send("Please login again");
  }

  const token = req.headers.authorization.split(" ")[1];
  // console.log("token",token)

  jwt.verify(token,"VIVEKGOSWAMI" , function (err, decoded) {
    if (err){
      res.send("Please login");
    }
    else{  
       if( req.body.data){
        req.body.data.username = decoded.userId 
        console.log(req.body.data)
       }else{
        req.body = decoded.userId
       }

    } 
    next();
  });
};   
  


module.exports = { authentication };