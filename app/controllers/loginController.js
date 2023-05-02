require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require(`jsonwebtoken`);
const {dataMapperUser} = require('../models/dataMapper');


/**
 * @type {Object}
 * @export loginController
 * @namespace adminController
 */
const loginController =  {

  /** The method allows you to log as an user
   * @memberof loginController
   * @method login
   * @param {Object} req.body
   * @param {Object} routers
   * @returns {Object} Return response to login
   */
  async login(req,res,next) {
    const existingUser = await dataMapperUser.getOneUser(req.body.email);
    if(!existingUser) {
      const err = new Error('L\'utilisateur et/ou le mot de passe sont incorrects');
      next(err);
    } else {
      const match = await bcrypt.compare(
        req.body.password,
        existingUser.password,
      );
      if(match) {
        const user = {email: req.body.email};
        const userID = existingUser.id;
        const accessToken = jwt.sign(user,
                                    process.env.JWT_SECRET,
                                    {expiresIn : process.env.JWT_EXPIRES_IN});
        res.json({accessToken, userID, user});
        console.log('REUSSIT BACK');
      } else {
        const err = new Error('L\'utilisateur et/ou le mot de passe sont incorrects');
        next(err);
      }
    }
  },

  /** The method allows you to signup a new user
   * @memberof loginController
   * @method signup
   * @param {Object} req.body
   * @param {Object} routers
   * @returns {Object} Return response to signup
   */
  async signup(req,res,next) {

    if(req.body.email ==='' || req.body.password ==='') {
      const err = new Error('Veuillez remplir tous les champs');
      err.status = 406;
      next(err);
    }
    const existingUser = await dataMapperUser.getOneUser(req.body.email);
    if(existingUser) {
      const err = new Error('Un utilisateur avec cet email existe déjà');
      next(err);
    } else {
      const userSignup = await dataMapperUser.userSignup(
          req.body.email,
          await bcrypt.hash(req.body.password, 10),
        );
      res 
        .status(200)
        .send('Votre compte est créé, vous pouvez vous connecter');
      if(!userSignup) {
          const err = new Error('Votre inscription a rencontrée un problème, veuillez recommencer');
          next(err);
        }
    }
  },
};

module.exports = loginController;