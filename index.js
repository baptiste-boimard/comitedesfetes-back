require('dotenv').config();
const debug = require('debug')('SERVER')

const express = require('express')
const app = express();

const router = require('./app/routers/router')
const handleError = require('./app/handlers/handleError');

const PORT = process.env.PORT || 3030;

app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(express.json({extended: true, limit: '50mb'}));
app.use((req ,res ,next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(`Access-Control-Allow-Methods`, `GET, PATCH, PUT, POST, DELETE, OPTIONS, HEAD`);
  res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With,Content-Type,Authorization, Accept`);
  res.header(`Access-Control-Allow-Credentials`, true);
  next();
})
app.use(router);
app.use(express.static('docs'));

//==--Middleware to catch error--==
app.use(handleError);

app.listen(PORT, () => {
  debug(`Listening on http://localhost:${PORT}`);
});
