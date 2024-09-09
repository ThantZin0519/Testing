const express = require('express');

const app = express();
app.set('views','./views')
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
     
    res.render('home',{
        name : "mgmg"
    })
})

app.get('/about', function (req, res) {
    res.render('about')

})

app.get('/contact', function (req, res) {
    res.render('contact')
})

app.use((req,res)=>{
    res.status(404).render('404')
    
})
app.listen(3000)
