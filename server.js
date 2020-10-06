const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require ('mongoose');
const shortid = require ('short-id');

const app = express();
app.use(bodyparser.json());

mongoose.connect("mongodb://localhost/shop-productdb", {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
});

const Product = mongoose.model(
    "products",
    new mongoose.Schema({
      _id: { type: String, default: shortid.generate },
      name: String,
      category: String,
      image: String,
      price: Number,
      availableQuantity: Number
    })
)

app.get('/api/products',(req,res)=>{
     Product.find({}).then((products)=>{
        res.send(products);
    })
})


app.post('/api/products',(req,res)=>{
    const newProduct = new Product(req.body);
    newProduct.save()
    .then((savedProduct)=>{ 
    res.send(savedProduct)
    })
})

app.listen(5000,()=>{
    console.log('serverStarted');
})

