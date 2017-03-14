module.exports = {

    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [

        // API Server
        {
            name: "INF",
            script: "./loader.js",
            watch: true,
            autorestart:false,
            "args": [
                "--color"
            ]
        },

        // API Server
        {
            name: "API",
            script: "./api/app.js",
            watch: true,
            "args": [
                "--color"
            ]
        },

        // CoreDB
        {
            name: "SRC",
            script: "./src/app.js",
            watch: true,
            "args": [
                "--color"
            ]
        }

        /* Web Server
        {
            name: "Sails",
            watch: true,
            script: "./client/app.js"
        },
        */
    ],

    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
    deploy: {
        production: {
            user: "node",
            host: "212.83.163.1",
            ref: "origin/master",
            repo: "git@github.com:repo.git",
            path: "/var/www/production",
            "post-deploy": "npm install && pm2 startOrRestart pm2.config.json --env production"
        },
        dev: {
            user: "node",
            host: "212.83.163.1",
            ref: "origin/master",
            repo: "git@github.com:repo.git",
            path: "/var/www/development",
            "post-deploy": "npm install && pm2 startOrRestart pm2.config.json --env dev",
            env: {
                NODE_ENV: "dev"
            }
        }
    }
}
