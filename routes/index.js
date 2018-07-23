"use strict";
const express = require("express"),
    router = express.Router();

// router.use('/cv', express.static(__dirname + '/website'));
router.use('/cv', express.static('public/website/'));

//==============================================================================
///Home page
router.get('/', (req, res, next) => {
    res.redirect('/cv')
})

module.exports = router;
