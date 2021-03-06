// Require Libraries
require('dotenv').config();
const express = require('express');
require('./api');

// App Setup
const app = express();


// Middleware
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(expressValidator());


// Routes
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/search', (req, res) => {
    res.render('search')
})

// require('./controllers/posts.js')(app);



// Run server on Port 
if (require.main === module) {
    app.listen(process.env.PORT, () => {
        console.log(`Listening at http://localhost:${process.env.PORT}`)
    });
}