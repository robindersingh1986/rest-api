'use strict';

const Hapi = require('hapi');
const allRoutes = require('./routes');

const server = Hapi.server({
    port: 5500,
    host: 'localhost',
    routes: {
        cors: true
    }
});

server.route(allRoutes);



const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();