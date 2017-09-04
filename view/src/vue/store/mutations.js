// Helper function to access nested key from string
Object.resolve = function(obj, path) {
    return path.split('.').reduce(function(prev, curr) {
        return prev ? prev[curr] : undefined
    }, obj || self)
}

/**
 * Changes in state data are set with these methods
 */
export default {
  /**
   * Notifications
   */
  selectNotification(state, index) {
    let list = state.notifications.list
    let current = list[index]

    if (current) {
      state.notifications.selected = index
      state.notifications.current = current
    }
  },
  addNotification(state, notification) {
    state.notifications.list.unshift(notification)
  },

  /**
   * Search
   */
  setSearchAutocomplete(state, content) {
    state.search.autocomplete = content
  },
  setSearchSuggestions(state, suggestions) {
    state.search.suggestions = suggestions
  }
}
