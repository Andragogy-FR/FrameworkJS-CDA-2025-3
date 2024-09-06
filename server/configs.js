export const cfSwagger = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            titre: 'MyReactApp',
            version: '0.0.1',
            description : 'A big Blue App',
        }
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Server Local Dev'
        }
    ],
    apis: ['./router/*', './server.js']
}