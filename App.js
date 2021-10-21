console.log('Testing this app')
const express = require('express')
const app = express();

const PORT = 3082

const productRouter = require('./routers/productRouter');


app.use('/product', productRouter);

app.get('/', (req, res) => {
    res.send('we get all the neccesssary information')
    console.log('server is running on the specified port');
})

app.listen(PORT)

