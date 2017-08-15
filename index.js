var twit = require('twit');
var bot = new twit({
  consumer_key: process.env.twitterbot_consumer_key,
  consumer_secret: process.env.twitterbot_consumer_secret,
  access_token: process.env.twitterbot_access_token,
  access_token_secret: process.env.twitterbot_access_token_secret,
  timeout: 60 * 1000
});


// bot.post('statuses/update', {status: 'hello world!'},
//     function(err, data, response){
//       if(err){
//         console.log(err);
//       }
//       else{
//         console.log(data.text + 'was tweeted');
//       }
//     });

/* get twitter friends' ids */

bot.get('friends/ids', {screen_name: 'priyankamalvi18'}, function(err, data, response){
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});

/* get twitter followers ids */
bot.get('followers/ids', {screen_name: 'priyankamalvi18'}, function(err, data, response){
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});

/* get twitter screen names of followers */

bot.get('followers/ list', {screen_name: 'priyankamalvi18'}, function(err, data, response){
  if(err){
    console.log(err);
  }else{
    data.users.forEach( user => console.log(user.screen_name));
    console.log(data);
  }
});

/* follow somebody */

bot.post('frienships/create', {screen_name: 'Swamy39'}, function(err, data, response){
  if(err){
    console.log(err);
  }else{
    console.log(data)
  }
});

/* pass the screen name and lookup friendship */

bot.get('friendships/lookup', {screen_name: 'Swamy39'}, function(err, data, response){
  if(err) {
    console.log(err);
  }else{
    console.log(data);
  }
});

/* DM somebody who is following you */
bot.get('direct_messages/new', {screen_name: 'priyankamalvi18', text: 'Hey Pri!'}, function(err, data, response){
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});
