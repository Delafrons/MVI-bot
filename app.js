var restify = require('restify'); var builder = require('botbuilder'); 
 
//========================================================= // Bot Setup //========================================================= 
 
// Setup Restify Server var server = restify.createServer(); server.listen(process.env.port || process.env.PORT || 3978, function () {    console.log('%s listening to %s', server.name, server.url);  });    // Create chat bot var connector = new builder.ChatConnector({     appId: "fbbbc975-8eeb-4a89-9118-2243907a8f96",     appPassword: "UFbU9iCJ1hSdWeUj7EAcSQM" }); var bot = new builder.UniversalBot(connector); server.post('/api/messages', connector.listen()); 
 
//========================================================= // Bots Dialogs //========================================================= 
 
bot.dialog('/', function (session) {     session.send("POCUVAJ MA SEM TY HLUPA PICA, NEJDE MI INTERNET!"); }); 