/**
 * *** NOTE ON IMPORTING FROM ANGULAR AND NGUNIVERSAL IN THIS FILE ***
 *
 * If your application uses third-party dependencies, you'll need to
 * either use Webpack or the Angular CLI's `bundleDependencies` feature
 * in order to adequately package them for use on the server without a
 * node_modules directory.
 *
 * However, due to the nature of the CLI's `bundleDependencies`, importing
 * Angular in this file will create a different instance of Angular than
 * the version in the compiled application code. This leads to unavoidable
 * conflicts. Therefore, please do not explicitly import from @angular or
 * @nguniversal in this file. You can export any needed resources
 * from your application's main.server.ts file, as seen below with the
 * import for `ngExpressEngine`.
 */

import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import {enableProdMode} from '@angular/core';

import * as express from 'express';
import {join} from 'path';

// .env file
require('dotenv').config();

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP,
} = require('./dist/server/main');

// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)],
  }),
);

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// TODO: implement data requests securely
// app.get('/api/*', (req, res) => {
//   res.status(404).send('data requests are not supported');
// });

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', {req});
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
