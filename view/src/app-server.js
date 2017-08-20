import { createApp } from './app.js'

export default context => {
    return new Promise((resolve, reject) => {
        const { app, router } = createApp(context)
        const { url } = context

        // Set router's location
        router.push(url)

        // Wait until router has resolved possible async hooks
        router.onReady(() => {
            resolve(app)
        })
    })
}
