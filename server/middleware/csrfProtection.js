const csurf = require('csurf');

module.exports = csurf({
  cookie: false,
});
