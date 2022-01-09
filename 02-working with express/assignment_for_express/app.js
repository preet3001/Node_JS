const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const defaultRoute = require('./routes/default_page');
const userRoute = require('./routes/user');
app.use(express.static(path.join(__dirname,'public')));

app.use(defaultRoute);
app.use(userRoute);
app.listen(PORT);