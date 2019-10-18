/**
 * Utility functions
 */

export default {
  // Parses a numeric price into gold, silver, copper
  parsePrice (price) {
    const gold = Math.floor(price / 10000)
    const silver = Math.floor(price / 100 - gold * 100)
    const copper = price - gold * 10000 - silver * 100
    return { gold, silver, copper }
  }
}
