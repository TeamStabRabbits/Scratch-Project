const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const eventsRouter = require('./routes/eventsRouter.js');
const chatsRouter = require('./routes/chatsRouter.js');
const usersRouter = require('./routes/usersRouter.js');
const userAuthController = require('./controllers/userAuthController.js');

const PORT = 3000;


app.use('/build', express.static(path.join(__dirname, '../build')));
//app.use(express.static(path.join(__dirname, '../build')));

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
app.use(userAuthController.authenticateJWT);

// Index page
app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
})

// Routers
app.use('/api/events', eventsRouter);
app.use('/api/chats', chatsRouter);
app.use('/api/users', usersRouter);


//Error handling
app.use((req, res) => {
  console.log('Page not found error caught in server');
  return res.status(404).send('Page not found.')
});

app.use(defaultErrorHandler);
function defaultErrorHandler(err, req, res, next){
  const defaultErr = {
    log : 'Express error handler caught unknown middleware error',
    status : 400,
    message : { err: 'An error occured'}
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
};


app.listen(PORT, () => {
    console.log('listening on port:', PORT, process.env.NODE_ENV);
});