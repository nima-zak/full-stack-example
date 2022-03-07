/**
 * @description server file for backend database: MongoDb
 */
 const express = require('express');
 const bodyParser = require('body-parser');
 const path = require("path");
//  const cors = require('cors');
 
 
 const PORT = process.env.PORT || 3001;
 const app = express();
 
 const server = require('http').createServer(app);
 
//  if (process.env.NODE_ENV === "production") {
//    app.use(express.static("client/build"));
//  }
 
//  app.use(cors());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());
//  app.use('/public', express.static(__dirname + '/public'));

 const apiRoutes = require('./server/routes');
 app.use('/', apiRoutes);
 
 
 /**
  * @description Send every request to the React app, Define any API routes before this runs
  */
 app.get("*", function(req, res) {
   res.sendFile(path.join(__dirname, "./client/build/index.html"));
 });
 
 server.listen(PORT, () => {
   console.log(`🌎 => connecting with port  ${PORT}`);
 });