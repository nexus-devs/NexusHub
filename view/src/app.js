/**
 * app.js is the universal entry to our app. In a client-only app, we would
 * create the root Vue instance right in this file and mount directly to DOM.
 * However, for SSR that responsibility is moved into the client-only entry
 * file. app.js simply exports a createApp function
 */
import Vue from 'vue'
import App from './app.vue'
import { createRouter } from "./router/index.js"

// export a factory function for creating fresh app, router and store
// instances
export function createApp(context) {
    const router = createRouter()
    const props = {
        props: context ? context.data : {}
    }
    const app = new Vue({
        router,
        render: createElement => createElement(App, props)
    })
    return { app, router }
}
