
const db = require('../models/dataModel.js');

const chatsController = {};

//get list of chats
// eventsController.getChatList = async (req,res,next) => {
//     const { user } = req.params;

// OUTDATED MODEL OF DATABASE, SEE NEW ER DIAGRAM IF USING BELOW
//SELECT u.username,CAST(u._id AS INT), CAST(e.user_id AS INT) FROM user_test u INNER JOIN user_event_test e ON CAST(e.user_id AS INT)=u._id 
//  //   const text = "SELECT INNER JOIN user_event_test INNER JOIN user_test"
//     const values = [user]

//     try{
//         const results = await db.query(text, values)
//         console.log(results);
//         //join table query
//         //use a for loop and iterate through rows to generate chatList
//     }
//     catch(err){
//         next({
//             log: 'Express error handler caught error in userController.getUser',
//             status: 400,
//             message: { err: 'An error occurred' },
//           });
//     }
// }


//get chat messages
chatsController.getChatLog = async (req, res, next) => {
  const { eventId } = req.params;

  const text = `
    SELECT * FROM chats
    WHERE event_id = $1
  `;
  const value = [eventId];

  try {
    await db.query(text, value)

    return next()
  }
  catch (err) {
    console.error(err);
    return next({
      log: 'Express error handler caught error in chatsController.getChatLog',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }

}


//post chat messages
chatsController.postMessage = async (req, res, next) => {
  if (!res.locals.authenticated) return res.sendStatus(403);
  const { _id: userId } = res.locals.user;

  const { message } = req.body;
  const { eventId } = req.params;

  const text = `
    INSERT INTO chats (user_id, message,events)
    VALUES($1, $2, $3)
  `;
  const values = [userId, message,eventId];

  try {
    await db.query(text, values)
    return next()
  }
  catch (err) {
    console.error(err);
    return next({
      log: 'Express error handler caught error in chatsController.postMessage',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }

}

module.exports = chatsController;