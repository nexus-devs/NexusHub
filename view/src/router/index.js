/**
 * Technically we're already routing url's on the blitz.js endpoints, however
 * the vue-router allows for more advanced frontend techniques like keeping
 * state accross pages or adding transitions
 */
import Vue from 'vue'
import Router from 'vue-router'
import routes from "./routes.js"

// Views
const IndexView = require("../views/index.vue").default

Vue.use(Router)

export function createRouter() {
    const config = {
        mode: 'history',
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return {
                    x: 0,
                    y: 0
                }
            }
        },
        routes: []
    }

    // Add auto-generated routes
    for (let route of routes) {
        config.routes.push({
            path: route.path,
            component: eval(route.component)
        })
    }
    return new Router(config)
}
