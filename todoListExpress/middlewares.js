const jwt = require('jwt-simple');
const jwtSecret = process.env.JWT_SECRET;
const bcrypt = require('bcrypt');
const User = require('./models/User');

const validate = (req, res, next) => {
  if (req.header('JWT-Token')) { // if the correct header exists
    let decoded = jwt.decode(req.header('JWT-Token'), jwtSecret); // decode the jwt token that is contained within it
    if (decoded.name && decoded.password) { // if the decoded token has both a name and password field
      User.findOne({ // finds the user associated with the name from the token
        name: decoded.name
      }, (error, foundUser) => {
        if (error) {
          console.error(error); // error handling for user not found
          res.status(404).json({
            error: error
          });
        } else {
          if (decoded.password === foundUser.password) { // if the decoded password (still hashed) matches the password stored in the database (still hashed)
            req.name = foundUser.name
            next(); // do the next thing (because it is successfully validated)
          } else {
            res.status(403).json({ // sends back forbidden because username and password combo are wrong
              message: 'Wrong username and password combo'
            });
          }
        }
      });
    } else {
      res.status(403).json({
        message: 'Token not readable'
      });
    }
  } else {
    res.status(403).json({
      message: 'Invalid headers'
    }); // sends back forbidden because header does not exist
  }
}

module.exports = {
  validate
}