export default {
  /**
   * Notifications
   */
  nextNotification({ commit, state }) {
    let list = state.notifications.list
    let next = state.notifications.selected + 1
    commit('selectNotification', next >= list.length ? 0 : next)
  },
  previousNotification({ commit, state }) {
    let list = state.notifications.list
    let previous = state.notifications.selected - 1
    commit('selectNotification', previous < 0 ? list.length - 1 : previous)
  },
  displayNotification({ commit }) {
    commit('selectNotification', 0)
    commit('showNotification')
    setTimeout(() => commit('hideNotification'), 5000)
  },
  pushNotification({ commit, dispatch }, notification) {
    commit('addNotification', notification)
    dispatch('displayNotification')
  }
}
