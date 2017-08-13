var twit = require('twit');
var bot = new twit({
  consumer_key: process.env.twitterbot_consumer_key,
  consumer_secret: process.env.twitterbot_consumer_secret,
  access_token: process.env.twitterbot_access_token,
  access_token_secret: process.env.twitterbot_access_token_secret,
  timeout: 60 * 1000
});


bot.post('statuses/update', {status: 'hello world!'},
    function(err, data, response){
      if(err){
        console.log(err);
      }
      else{
        console.log(data.text + 'was tweeted');
      }
    });
