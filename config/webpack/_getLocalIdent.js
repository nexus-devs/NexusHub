/**
 * Makes [module] and [index] available in LocalIdentName.
 * Is currently needed to deal with the incorrectly working custom inject names of CSS modules.
 * Github Issue: https://github.com/vuejs/vue-loader/issues/1578
 */

const loaderUtils = require('loader-utils')

module.exports = function getLocalIdent (context, localIdentName, localName, options) {
  const { resourceQuery, resourcePath } = context
  const { index, module } = loaderUtils.parseQuery(resourceQuery)

  const selector = loaderUtils.interpolateName(context, localIdentName, {
    context: context.rootContext,
    content: resourcePath + resourceQuery + localName
  })
    .replace(/\[local\]/gi, localName)
    .replace(/\[module\]/gi, typeof module === 'boolean' ? '' : module)
    .replace(/\[index\]/gi, index)
    .replace(new RegExp('[^a-zA-Z0-9\\-_\u00A0-\uFFFF]', 'g'), '-')
    .replace(/^((-?[0-9])|--)/, '_$1')

  return selector
}
