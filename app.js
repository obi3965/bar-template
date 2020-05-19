const express = require('express')
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const dateAndTime = require('date-and-time');
const cors = require('cors')
const app = express()


const mainRoutes = require('./routes/index')


app.use(morgan("dev",{
      skip:req => !req.url.endsWith(".html") && req.url.indexOf(".") > -1
  }));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(cookieParser())
  app.use(cors())
  
  //set the view engine
  app.set("view engine", "ejs");
  app.set("views", "./views");
  app.use(express.static("public"));
  // app.use(express.static(path.join(__dirname, 'public')));
  app.locals.dateAndTime = require("date-and-time");
  
  
  app.use('/', mainRoutes);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error',{
//     'title': 'error page',
//   });
// });

let port = process.env.PORT || 3000;
app.listen(port, error => {
    if (error) console.log(error);
    console.log(
      "\x1b[35m%s\x1b[0m",
      "================================================================"
    ); // udskriver en lilla streg i konsol
    console.log(
      "Server is listening on port %s, address: %s",
      port,
      "http://localhost:" + port
    );
  });



  module.exports = app;