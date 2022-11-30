
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4321;
require("dotenv").config();


//Routes 

app.get('/', (request, response) => {
  response.send(PORT)
})



app.get("/dburl",(req,res) => {
  res.send(`MY connection string is: ${process.env.DATABASE_URL}`)
})

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
});