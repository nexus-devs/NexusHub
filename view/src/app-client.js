import { createApp } from './app.js'

const { app, router } = createApp()

// Wait until router has resolved possible async hooks
router.onReady(() => {
    app.$mount('app')
})
