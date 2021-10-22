const express = require('express')
const mongoose = require('mongoose')
const app = express();



app.use(express.json())

const PORT = 3082

const productRouter = require('./routers/productRouter');
const userSchema = require('./routers/userRouter')

mongoose.connect('mongodb+srv://hallymart:marathon23@cluster0.toywg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() =>{
    console.log('conected to database');
})
   
app.use('/product', productRouter);
app.use('/user', userSchema)



app.get('/', (req, res) => {
    res.send('we get all the neccesssary information')
    console.log('server is running on the specified port');
})

app.listen(PORT, () => {
    console.log('connected to internet');
})

