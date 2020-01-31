/**
 * This is a helper function for theme selection, it directly defines how the current theme is selected.
 * Include this in the component you want to theme and make it a computed property.
 *
 * This approach was chosen over extending the Vue prototype, to make it more clear where the variable comes from,
 * and to avoid bloating components that don't need the variable.
 */

module.exports = function (self, returnName = false) {
  const route = self.$route.fullPath.split('/')

  let theme = 'warframe' // Default theme
  const availableThemes = ['wow-classic']

  if (route.length > 1) {
    const subsite = route[1]
    if (availableThemes.includes(subsite)) theme = subsite
  }

  // Returns directly the injected style object
  return returnName ? theme : self[theme]
}
