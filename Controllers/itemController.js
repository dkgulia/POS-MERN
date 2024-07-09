const itemModel = require("../Models/itemModel");

//get items
 const getItemContainer = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).send(items);
  } catch (error) {
    console.log(error);
  }
};

//add items
const addItemController = async(req,res)=>{
 try{
  const newItem = new itemModel(req.body)
  await newItem.save()
  res.status(201).send("item created successfully")
 }catch(error){
  res.status(400).json({ error: error.message });

  console.log(error)
 }
}

module.exports = { getItemContainer,addItemController};


