const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./users.route');
const brandsRoute = require('./brand.route');
const router = express.Router();

// localhost: 3001/api/auth
// router.use('/auth', () => {});

const routesIndex = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/brands',
    route: brandsRoute,
  },
];

routesIndex.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
