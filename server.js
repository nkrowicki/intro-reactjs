/**
 * Server bootstrap file
 */
/**
 * Load module dependencies
 */
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const settings = require('./api/config/settings');
/**
 * Create Express application
 */
const app = express();
/**
 * Connect to MongDB database
 */
require('./api/db/connect.js');
/**
 * Middlewares
 */
// Armoring the API with Helmet
app.use(helmet());
// Parse application/json
app.use(bodyParser.json());
// Enabling CORS in the API
app.use(cors());
// Compacting requests using GZIP middleware
app.use(compression());
// Serve static content
app.use(express.static(__dirname + settings.staticContentFolder));
/**
 * Map routes with controllers
 */
app.use('/api/cliente', require('./api/controllers/cliente.controller'));
app.use('/api/egreso', require('./api/controllers/egreso.controller'));
app.use('/api/empleado', require('./api/controllers/empleado.controller'));
app.use('/api/ingreso', require('./api/controllers/ingreso.controller'));
app.use('/api/saldo', require('./api/controllers/saldo.controller'));
// This route deals enables HTML5Mode by forwarding missing files to the index.html
app.all('/*', (req, res) => {
  res.sendFile(__dirname + settings.staticContentFolder + settings.indexPagePath);
});
// Make application run on given port
app.listen(settings.port, () => console.log('AM ADMIN API is running...'));
// Export app to be re-used
module.exports = app;