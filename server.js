const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controller.js');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(routes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on PORT http://localhost:${PORT}`);
  });
});
