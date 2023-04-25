const express = require('express')
const router = express.Router();
const path = require('path')
// const dashboard = require('../controller/dashboard')
const register = require('../controller/register')


router.get("/",(req,res)=>{
    res.send("Hello");
    // res.sendFile(path.join(__dirname,'../src/index.html'));
})
// router.get("/two",(req,res)=>{
//     // res.send("Hello");
//     res.sendFile(path.join(__dirname,'../src/index2.html'));
// })

// router.get('/register')

router.get("/register",register.register);
router.post("/register",register.register);
router.get("/login",register.login);
router.post("/login",register.login);
// router.get("/dashboard/:id/",dashboard);
// router.post("/dashboard/:id/",dashboard);

module.exports = router;