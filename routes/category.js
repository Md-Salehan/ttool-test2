const router = require("express").Router();
const Category = require("../models/category")

//All SUBISSION
router.get("/allcategory", async (req, res) => {
    try {
      const category = await Category.find();
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //Submit TOOL
router.post("/add", async (req, res)=>{
  const newCategory = new Category(req.body);
  
  try{
     const nc = await newCategory.save();
     res.status(200).json(nc);
  }catch (err) {
     console.log(err);
  }
})

  //DELETE CATEGORY
  router.delete("/delete/:id", async (req, res) => {
    try {
       const category = await Category.findById(req.params.id);
       await category.deleteOne();
       res.status(200).json(`the ${category.name} category deleted`);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;