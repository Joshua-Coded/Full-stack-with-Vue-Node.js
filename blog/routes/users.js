const express = require('express');
const router = express.Router();

router.get('/', function(){
    res.send('hello all users');
})


module.exports = router;
