import express from 'express';
import { engine, create } from 'express-handlebars';
import cors from 'cors';
import path from 'path';

import { router } from "./routes"

const app = express();
const port = 3001;

const hbs = create({
  // Specify helpers which are only registered on this instance.
  helpers: {
    json: function(obj: object) {
      return JSON.stringify(obj);
    }
  }
});

app.enable('view cache');
//app.engine('handlebars', engine());
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`🚀 Server running in ${port}...`)
})