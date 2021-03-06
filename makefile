# Install all node dependencies
deps:
	npm i nodemon
	npm i dotenv
	npm i mongoose
	npm i express
	npm i express-handlebars
	npm i express-validator
	npm i exphbs
	npm i body-parser
	npm i @handlebars/allow-prototype-access
	npm i babel-cli
	npm i bcryptjs
	npm i chai
	npm i chai-http
	npm i cookie-parser
	npm i jsonwebtoken
	npm i mocha

# run application
run:
	node index.js

test:
	node tests/app.test.js