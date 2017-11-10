/**
 * Helper function to dynamically register store modules inside components.
 * Takes care of existing state preservation and SSR-compatibility automatically
 */
export default function(name, store, vuex, preserveState) {
  // Find identifiable mutation/action to check if module has been registered
  // already. This is important to stay in sync with SSR.
  let preregistered = false

  if (store.mutations) {
    preregistered = vuex._mutations[Object.keys(store.mutations)[0]]
  }
  else if (store.actions) {
    preregistered = vuex._actions[Object.keys(store.actions)[0]]
  }
  else if (store.getters) {
    preregistered = vuex._getters[Object.keys(store.getters)[0]]
  }

  // Not registered already? Add it now and preserve any existing state if
  // present.
  if (!preregistered) {
    vuex.registerModule(name, store, { preserveState })
  }
}
