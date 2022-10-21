const router = require("express").Router();
const User = require("../models/Equipment");

//CREATE USER
router.post("/", async (req, res) => {
    const newUser = new User(req.body);
  
    let code = 1;
    try {
      const usercount = await User.find().sort({_id:-1}).limit(1)
      if(usercount.length > 0)
        code += usercount[0].code
        newUser.e_id = 'EID00'+ code;
        newUser.code = code;
  
        try {
          const savedUser = await newUser.save();
          res.status(200).json(savedUser);
        } catch (err) {
          res.status(500).json(err);
        }
  
    } catch (error) {
      console.log(error)
    }
  
  });
  

//GET USER
router.get("/:e_id", async (req, res) => {
  try {
    const user = await User.findOne({ 'e_id': req.params.e_id });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL USER
router.get("/", async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });

 //UPDATE USER
 router.put("/update/:e_id", async(req, res) => {
    try {
      const updatedUser = await User.findOneAndUpdate({e_id:req.params.e_id},
        {
          $set: req.body
        },{new:true}
      );
     res.status(200).json(updatedUser);
    
  } catch (err) {
    res.status(500).json(err);
  }
})


//DELETE USER
router.delete("/delete/:e_id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({e_id:req.params.e_id});
    try {
      await user.delete();
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
  module.exports = router;