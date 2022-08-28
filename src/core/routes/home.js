const router = require("express").Router();
const {Home}= require('../controllers/home')

router.get("/", Home);

module.exports = router;
