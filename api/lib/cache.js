const crypto = require('crypto')

/**
 * Universal one way cache. Stores any value as a hash and keeps it stored as
 * long as specified. You'd wanna use this to ignore duplicates in user inputs.
 */
class Cache {
  constructor (duration) {
    this.objects = []
    this.duration = duration || 1000 * 60 * 2
    setInterval(() => this.removeExpired(), 1000 * 5)
  }

  /**
   * Find given object in cache
   */
  find (object, exhash) {
    let found = null
    let index = null
    const hash = exhash || crypto.createHash('md5').update(JSON.stringify(object)).digest('hex')

    this.objects.forEach((obj, i) => {
      if (obj.hash === hash) {
        found = obj
        index = i
      }
    })

    if (found && !this.isExpired(found)) {
      return {
        found: found,
        index: index
      }
    } else {
      return null
    }
  }

  /**
   * Add object to cache if new
   */
  add (object) {
    const hash = crypto.createHash('md5').update(JSON.stringify(object)).digest('hex')
    const data = { hash, createdAt: new Date() }
    if (!this.find(object, hash)) this.objects.push(data)
  }

  /**
   * Remove cached object from index or object match
   */
  remove (hash) {
    const index = this.objects.findIndex(o => o.hash === hash)
    this.objects.splice(index, 1)
  }

  /**
   * Check if cached object is expired
   */
  isExpired (object) {
    if (new Date() - object.createdAt > this.duration) {
      this.remove(object.hash)
      return true
    } else {
      return false
    }
  }

  /**
   * Periodically remove all expired objects
   */
  removeExpired () {
    for (const object of this.objects) {
      this.isExpired(object)
    }
  }
}

module.exports = Cache
