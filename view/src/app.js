/**
 * app.js is the universal entry to our app. In a client-only app, we would
 * create the root Vue instance right in this file and mount directly to DOM.
 * However, for SSR that responsibility is moved into the client-only entry
 * file. app.js simply exports a createApp function
 */
import Vue from 'vue'
import App from './app.vue'

// export a factory function for creating fresh app, router and store
// instances
export function createApp(ctx) {
    console.log(ctx)
    const app = new Vue({
        render: createElement => {
            const props = ctx ? ctx.data : {}
            return createElement(App, {
                props: {
                    test: "cyka blyat"
                }
            })
        }
    })
    return {
        app
    }
}
