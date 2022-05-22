require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public') );

const info = {
    titles: [
        {"title": "home"},
        {"title": "shop"},
        {"title": "product"},
        {"title": "blog"},
        {"title": "about"},
        {"title": "contact"},
        {"title": "cart"},
        {"title": "Login"}
    ]
}

app.get('/', (req, res) => {
    res.render('home', info);
});

app.get('/shop', (req, res) => {
    res.render('shop', info);
});

app.get('/single_prd', (req, res) => {
    res.render('single_prd', info);
});


app.get('/blog', (req, res) => {
    res.render('blog', info);
});

app.get('/about', (req, res) => {
    res.render('about', info);
});

app.get('/contact', (req, res) => {
    res.render('contact', info);
});

app.get('/cart', (req, res) => {
    res.render('cart', info);
});

app.get('/login', (req, res) => {
    res.render('login', info);
});

app.get('*', (req, res) => {
    res.send('404 | Page not found' );
});

app.listen(port, () => {
    console.log(`App listening at port: ${port}`);
})