const router = require("express").Router();
const Glossary = require("../models/glossary")


//Add GLOSSARY
router.post("/add", async (req, res)=>{
    const newGlossary = new Glossary(req.body);
    try{
       const glossary = await newGlossary.save();
       res.status(200).json(glossary);
    }catch(err) {
       console.log(err);
    }
 });


//GET ALL GLOSSARY
 router.get("/all", async (req, res)=>{
    try{
       const allGlossary = await Glossary.find();
       res.status(200).json(allGlossary);
    }catch(err) {
       console.log(err);
    }
 });
 



module.exports = router;