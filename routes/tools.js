const router = require("express").Router();
const submit = require("../models/submit")
const Tool = require("../models/tool")


//Add TOOL
router.post("/addtool", async (req, res)=>{
   const newTool = new Tool(req.body);
   try{
      const tool = await newTool.save();
      res.status(200).json(tool);
   }catch(err) {
      console.log(err);
   }
});

//ALL TOOL
router.get("/alltool", async (req, res)=>{
   console.log("alltool");
   try{
      const tool = await Tool.find();
      res.status(200).json(tool);
   }catch(err) {
      console.log(err);
   }
}); 

let savetool = async(x)=> await x.save();
router.get("/addalltool", async (req, res)=>{
   try{
      resultsArr.map((item,i)=> {
         let x = new Tool({
            toolName: item.name,
           toolURL: item.siteURL,
           toolDesc: item.description,
           toolVideoURL: "",
           priceModle: "Free",
           tagList: item.tags,
           toolExtraDesc: "",
           toolImageURL: item.imageURL
         })
         console.log(i);
         savetool(x)
      res.status(200).json("ok");
   })

   }catch(err) {
      console.log(err);
   }
}); 


//Delete TOOL
router.delete("/delete/:id", async (req, res) => {
   try {
      const tool = await Tool.findById(req.params.id);
      await tool.deleteOne();
      res.status(200).json("the tool has been deleted");
   } catch (err) {
     res.status(500).json(err);
   }
 });

 //TOOL RESULT
//  router.get("/result", async (req, res)=>{
//    try{
//       const tool = await Tool.find({tagList: {$eleMatch: {$in: ["Chat","Finance"]}}});
//       res.status(200).json(tool);
//    }catch(err) {
//       console.log(err);
//    }
// }); 

 //TOOL LIKE
router.get("/:id/like", async (req, res) => {
   try {
      let likeNum=9;
      const tool = await Tool.findById(req.params.id);
      likeNum = tool.like+1 
      await tool.updateOne({ $push: { likes: 7} });
      res.status(200).json({l:tool.like});
   } catch (err) {
     res.status(500).json(err);
   }
 });

module.exports = router;