'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
    port: 5500,
    host: 'localhost',
    routes: {
        cors: true
    }
});
const allRoutes=[
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello, world!';
        }
    },
    {
        method: 'GET',
        path: '/test',
        handler: (request, h) => {

            return { page: "test", message:'Hello, world!'};
        }
    }
];

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