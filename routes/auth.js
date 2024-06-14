const { Router } = require("express");
const { getUser } = require("../models/user");

const router = Router();

router.post('/auth', async(req, res, next)=>{
    const {username, password} = req.body;

    const result = await getUser(username, password);

    if(!result){
        return res.status(403).json({msg: "no access"})
    }
    //need to check password
    res.status(200).json({msg:"Authenticated"});

})

module.exports = router;