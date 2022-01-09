const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','default.html'));    
});

module.exports = router;
