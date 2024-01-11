const jwt = require("jsonwebtoken");
const userdb = require("../Model/userSchema");
const keysecret = "jkhgtfdrecfdsghjkloimnhbjpklcfdrt";


const authentication = async (req, res, next) => {
          try {
                    const token = await req.headers.authorization;
                    // console.log(token);

                    if (!token) {
                              res.status(400).json({
                                        msg: "Token not found"
                              })
                    } else {
                              const verifyToken = await jwt.verify(token, keysecret);

                              if (!verifyToken) {
                                        res.status(400).json({
                                                  msg: "Invalid Token"
                                        })
                              } else {
                                        // console.log(verifyToken);

                                        const getData = await userdb.findOne({
                                                  _id: verifyToken._id
                                        })

                                        if (!getData) {
                                                  res.status(400).json({
                                                            msg: "User Not Found!"
                                                  })
                                        } else {
                                                  // console.log(getData);
                                                  req.getData = getData;

                                                  next();
                                        }
                              }
                    }
          } catch (error) {
                    res.status(400).json({
                              msg: "Not Auth"
                    })
          }

}

module.exports = authentication;