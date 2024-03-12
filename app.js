const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://admin01:Admin123456@cluster0.wunye3r.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
)

app.use(express.json())

const cardRouter = require('./routes/cards')
app.use('/', cardRouter)
const PORT = 4000
app.listen(PORT, () => {
  console.log('server is runing........')
})
