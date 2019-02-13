import * as express from 'express';
import CatCtrl from './cat.controller';
import auth from '../../auth';

const catCtrl = new CatCtrl();

const router = express.Router();

router.route('/').get(catCtrl.getAll);
router.route('/count').get(catCtrl.count);
router.route('/cat').post(catCtrl.insert);
router.route('/cat/:id').get(catCtrl.get);
router.route('/cat/:id').put(catCtrl.update);
router.route('/cat/:id').delete(catCtrl.delete);

module.exports = router;