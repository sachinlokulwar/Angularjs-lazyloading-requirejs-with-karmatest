define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: 'views/main.html',
                dependencies:['scripts/controllers/main.js']
            },
            '/about': {
                templateUrl: 'views/about.html',
                dependencies:['scripts/controllers/about.js']
                
            },
            '/contact': {
                templateUrl: 'views/contact.html',
                    dependencies: [
                        'scripts/controllers/contact.js'
                    ]
            }
        }
    }
});