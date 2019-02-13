import * as express from 'express';
import UserCtrl from './user.controller';
import auth from '../../auth';

const userCtrl = new UserCtrl();

const router = express.Router();

router.route('/login').post(userCtrl.login);
router.route('/users').get(userCtrl.getAll);
router.route('/count').get(userCtrl.count);
router.route('/user').post(userCtrl.insert);
router.route('/user/:id').get(userCtrl.get);
router.route('/user/:id').put(userCtrl.update);
router.route('/user/:id').delete(userCtrl.delete);

module.exports = router;