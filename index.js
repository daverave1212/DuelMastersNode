const express = require('express');
const bodyParser = require('body-parser');
const YAML = require('yamljs');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

// CORS Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routing with YAML and JS magic
const $routes = YAML.parseFile('./config/routing.yml').routes;
console.log($routes)
for (let route in $routes) {
	route = $routes[route];
	const controllerInfo = route.controller.split(':');
	const Action = require(`./controllers/${controllerInfo[0]}`)[`${controllerInfo[1]}`];
	(route.methods || ['GET']).forEach(method => { console.log(method); app[(method || 'GET').toLowerCase()](route.path, Action);});
}
/*
Practic asta e app.get(path, UsersController/method)
*/

try {
	app.listen(PORT, () => console.log(`Server started on ${PORT}`));
} catch (err) {
	console.log('Error starting express server: ' + err.toString());
}
