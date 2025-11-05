const express = require('express');
const path = require('node:path');
const app = express();


const authRoute = require('./routes/auth');
const homeRoute = require('./routes/index');
const recipeRoute = require('./routes/recipes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/auth', authRoute);
app.use('/recipe', recipeRoute);
app.use('/', homeRoute);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 