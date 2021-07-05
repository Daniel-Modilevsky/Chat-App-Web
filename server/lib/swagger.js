const swaggerOptions = {
    swaggerDefinition : {
        info:{
            title: 'Chat App Web - API',
            description: 'The server side api of "ChatAppWeb"',
            contact: {
                name: 'Daniel Modilevsky'
            },
        },
        servers: [
            " http://localhost:8080"
        ]
    },
    apis: ['api/*/*.route.js'],
    definitions: {
        marker: {
            type: "object",
            properties: {
                displayName: {
                    type: "string"
                },
            }
        }
    }
}

module.exports = swaggerOptions