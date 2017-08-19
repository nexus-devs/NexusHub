import { createApp } from './app.js'

export default ctx => {
  const { app } = createApp(ctx)
  return app
}
