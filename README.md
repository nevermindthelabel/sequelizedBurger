# sequelizedBurger

## See the project live on Heroku [here](https://stormy-chamber-92285.herokuapp.com/)

### Goal

In this project, our goal was to take the ORM [Burger](https://github.com/nevermindthelabel/buger) project and convert it to a [Sequelized](http://docs.sequelizejs.com/) version. My takeaway from this project was that in some ways Sequelize is much easier than a manually created ORM, but there are a places where it seemed easier to have the control of the code directly, rather than using methods from a 3rd party library.

Just as with the Burger project, we used [NodeJS](https://nodejs.org/en/) for sever side scripting, [ExpressJS](https://expressjs.com/) for our server, [jQuery](https://jquery.com/) to listen for click events and control our ajax requests, [MySQL](https://www.mysql.com/) for our database, and [Handlebars](https://handlebarsjs.com/) to build semantic templates. Some basic styling is used on the page with CSS and [Bootstrap](https://getbootstrap.com), and I added in some new pictures to update the styling a little.

If you would like to run the project locally, you will need to install NodeJS and MySQL on your machine and run `npm install`. That will go to the package.json file and install several node modules that are required for this to run properly, namely `dotenv, express, express-handlebars, and sequelize`. Create a `.env` file at the root of your project directory and enter `DATABASE_PASSWORD='your_mysql_password'`, and `HOST = '127.0.0.1'` or `'localhost'`. Then, start your server by typing `node server.js`. Personal recommendation, first install [nodemon](https://nodemon.io/) globally `npm i -g nodemon` then run the server with `nodemon server.js`. With nodemon, any changes done to the \*.js files will automatically restart the server.

Once the server is running, open your browser, [chrome](https://www.google.com/chrome/) is preferred, and navigate to http://localhost:3000. Enter a burger name, sit back with some fries and a Dr. Pepper and enjoy!
