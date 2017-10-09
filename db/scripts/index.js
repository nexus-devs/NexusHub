const scraper = require("./scraper.js")

process.on('unhandledRejection', err => {
  throw err
})

scraper.getItems()
