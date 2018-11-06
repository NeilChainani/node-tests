var db = require("./db");
module.exports.handleSignup = (email, password) => {
  //check if email exists
  //save user to db
  db.saveUser({ email, password }); //send welcome to email
};
