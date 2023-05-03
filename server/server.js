const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const routes = require('./routes');
const passport = require('passport');
const { jwtStrategy } = require('./middleware/passport');

const { handleError, convertToApiError } = require('./middleware/apiError');

// mongodb+srv://admin:<password>@cluster0.r8aa2xq.mongodb.net/?retryWrites=true&w=majority
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// body parse
app.use(express.json());

// sanitize
app.use(xss());
app.use(mongoSanitize());

// passport
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// routes   // localhost:3001/api
app.use('/api', routes);

// handle errors
// if the error not recognized...convert to api error
app.use(convertToApiError);
app.use((err, req, res, next) => {
  handleError(err, res);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
