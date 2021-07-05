const express = require('express');
const helmet = require('helmet');
const compress = require('compression');
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const SwaggerDocss = require('./swagger')
const SwaggerDocs = swaggerJsDoc(SwaggerDocss);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(SwaggerDocs));

const defaultRoutes = require('../api/global/global.route');
const authRoutes = require('../api/auth/auth.route');
const reportRoutes = require('../api/reports/report.route');
const markerRoutes = require('../api/markers/marker.route');

// Parser
app.use(helmet());
app.use(compress({ level: 9 }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/public', express.static('public'));



app.use(authRoutes)
// app.use(reportRoutes)
// app.use(markerRoutes)
app.use(defaultRoutes)

module.exports = app;