import { createApp } from './app.js'

/**
 * Helper function for recursive asyncData calling of matched components
 */
let params, api
const callAsyncRecursive = (parent) => {
  // First object isn't passed as component array/collection
  if (parent.components) {
    parent.asyncData ? parent.asyncData() : 0
    return callAsyncRecursive(parent.components)
  }
  // Sub components are traversed
  else {
    for (let property in parent) {
      let obj = parent[property]
      // More sub components? recursively traverse them too
      if (obj.components) {
        callAsyncRecursive(obj.components)
      }
      if (obj.asyncData) {
        return obj.asyncData()
      }
    }
  }
}

/**
 * Generate App with pre-fetched data in store state
 */
export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp(context)
    const { url } = context

    // Set router's location
    router.push(url)

    // Wait until router has resolved possible async hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()

      // Call asyncData hooks on components matched by the route recursively.
      // A asyncData hook dispatches a store action and returns a Promise,
      // which is resolved when the action is complete and store state has been
      // updated.
      Promise.all(matchedComponents.map(loaded => {
        params = {
          store,
          route: router.currentRoute
        }
        api = context.api
        return callAsyncRecursive(loaded)
      })).then(() => {
        // After all asyncData hooks are resolved, our store is now
        // filled with the state needed to render the app.
        // Expose the state on the render context, and let the request handler
        // inline the state in the HTML response. This allows the client-side
        // store to pick-up the server-side state without having to duplicate
        // the initial data fetching on the client.
        context.state = store.state
        resolve(app)
      })
    })
  })
}
