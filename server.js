const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.static(__dirname));
app.use(cors());

app.listen(5000, ()=>{
    console.log('connected on 5000')
})
app.get('/about-us/why-choose-us', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'why-choose-us.html'))
})
app.get('/about-us/who-we-are', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'who-we-are.html'))
})
app.get('/about-us/partners', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'partners.html'))
})
app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'login.html'))
})
app.get('/tools/education/learn-forex', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'learn-forex.html'))
})
app.get('/get-trading/forex-trading-account/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'forex-trading-account.html'))
});
app.get('/trading/markets/forex', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'forex.html'));
})
app.get('/company/company-updates/contact-us/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'contact-us.html'))
})