


const jwt = require("jsonwebtoken");


const authentication = (req, res, next) => {
    // console.log("authentication start");
    // console.log("start" , req.body);
  // console.log(req.headers)
  if (!req.headers.authorization) {
    // console.log("mai yha hu")
    return res.send("Please login again");
  }

  const token = req.headers.authorization.split(" ")[1];
  // console.log("token",token)

  jwt.verify(token,"VIVEKGOSWAMI" , function (err, decoded) {
    if (err){
      //  console.log("amit ghosh" , err)
      res.send("Please login");
    }
    else{
      // console.log("amit" , decoded)
      // req.body = {...req.body , username : decoded.userId}
  
       if( req.body.data){
        req.body.data.username = decoded.userId 
       }else{
        req.body = decoded.userId
       }

    //  { req.body.data.username = decoded.userId || req.body = decoded.userId}
    } 
    next();
  });
};   
  


module.exports = { authentication };