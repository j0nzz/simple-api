const router = require('express').Router()
    , api = require('../controllers/api')

router.route('/').get(api.ping)


module.exports = router
