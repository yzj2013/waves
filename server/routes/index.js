const express = require('express');
const authRoute = require('./auth.route');
const router = express.Router();

// localhost: 3001/api/auth
// router.use('/auth', () => {});

const routesIndex = [
  {
    path: '/auth',
    route: authRoute,
  },
];

routesIndex.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
