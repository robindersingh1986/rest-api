const allRoutes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Welcome to Application, this is the landing page for rest-api node application';
        }
    },
    {
        method: 'GET',
        path: '/_getEmpInfo',
        handler: (request, h) => {

            return { title: "Emp Info page", id: 20, name: "Emp 20", age: "20 years" };
        }
    }
];

module.exports = allRoutes;
