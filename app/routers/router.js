const express = require('express');

const routerWrapper = require('../handlers/routerWrapper');
const loginController = require('../controllers/loginController');
const tinymceController = require('../controllers/tinymceController');

const {
  schemaCreateUser,
} = require('../validation/schema');

const {
  validateCreateUser,
} = require('../validation/validations');

const router = express.Router();

router.post(
  '/signup',
  validateCreateUser(schemaCreateUser),
  routerWrapper(loginController.signup),
  );


router.post('/login', routerWrapper(loginController.login));

router.post('/tinymce', routerWrapper(tinymceController.upload));
router.get('/tinymcedown', routerWrapper(tinymceController.download));

router.post('/tinymcesave', routerWrapper(tinymceController.save));


module.exports = router;