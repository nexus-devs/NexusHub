/**
 * Technically we're already routing url's on the blitz.js endpoints, however
 * the vue-router allows for more advanced frontend techniques like keeping
 * state accross pages or adding transitions
 */
import Vue from 'vue'
import Router from 'vue-router'
import routes from "./routes.js"

// View paths will be automatically injected here. They can't be required
// dynamically at runtime, so we have to do it pre-build. Names and paths are
// generated from endpoint schema.
//start-view-injection
const viewswarframeindexvue = require("D:/dev/nexus-stats/nexus-stats/view/src/vue/views/warframe/index.vue").default
//end-view-injection

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

  // Add auto-generated routes. For components we eval the unique variable name
  // composed of the view without restricted characters
  for (let route of routes) {
    config.routes.push({
      path: route.path,
      component: eval(route.component.replace(/\/|\\|\.|\-/g, ""))
    })
  }
  return new Router(config)
}
