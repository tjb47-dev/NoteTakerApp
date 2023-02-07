// DEPENDENCIES
const express = require('express');
const path = require('path');
const fs = require('fs')
const apiRoutes = require('./routes/apiroutes')
const htmlRoutes = require('./routes/htmlroutes')


//APP PORT AND APP OBJECT
const app = express();
const PORT = process.env.PORT || 3001;


//MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//API ROUTES
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

//SERVER LISTEN
app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
);