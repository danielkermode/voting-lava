# voting-lava

A voting app that runs on node.js. Uses Express, Socket.io and Handlebars. Users can make a question, then add options to that question. After this time starts ticking! Anyone can vote if they have the url for the question. Time starts ticking, and when it runs out, the most highly voted answer will be the one remaining!

Install dependencies: ```npm i```.

Knex should be installed globally. If not: ```npm i -g knex```.

Database migrations must be run with knex: ```npm run database```.

Run the server with nodemon: ```npm run dev```. Served on localhost:3000.

Run the tests: ```npm test```. If the tests are run, make sure to run ```npm run database``` afterwards to clean up the database (ideally we would fix this; our migrations don't seem to be automated properly in the tests currently).