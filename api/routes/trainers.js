const router = require("express").Router();
const Trainer = require("../models/Trainer");

//CREATE TRAINER
router.post("/", async (req, res) => {
    const newTrainer = new Trainer(req.body);
  
    let code = 1;
    try {
      const trainercount = await Trainer.find().sort({_id:-1}).limit(1)
      if(trainercount.length > 0)
        code += trainercount[0].code
        newTrainer.trainer_id = 'UID00'+ code;
        newTrainer.code = code;
  
        try {
          const savedTrainer = await newTrainer.save();
          res.status(200).json(savedTrainer);
        } catch (err) {
          res.status(500).json(err);
        }
  
    } catch (error) {
      console.log(error)
    }
  
  });
  

//GET TRAINER
router.get("/:trainer_id", async (req, res) => {
  try {
    const trainer = await Trainer.findOne({ 'trainer_id': req.params.trainer_id });
    res.status(200).json(trainer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL TRAINER
router.get("/", async (req, res) => {
    try {
      const trainer = await Trainer.find();
      res.status(200).json(trainer);
    } catch (err) {
      res.status(500).json(err);
    }
  });

 //UPDATE TRAINER
 router.put("/update/:trainer_id", async(req, res) => {
    try {
      const updatedTrainer = await Trainer.findOneAndUpdate({trainer_id:req.params.trainer_id},
        {
          $set: req.body
        },{new:true}
      );
     res.status(200).json(updatedTrainer);
    
  } catch (err) {
    res.status(500).json(err);
  }
})


//DELETE TRAINER
router.delete("/delete/:trainer_id", async (req, res) => {
  try {
    const trainer = await Trainer.findOneAndDelete({trainer_id:req.params.trainer_id});
    try {
      await trainer.delete();
      res.status(200).json("Trainer has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
  module.exports = router;


