process.on('uncaughtException', err => {
  console.log(err)
})
process.on('unhandledRejection', err => {
  console.log(err)
})

const scraper = require("./scraper.js")
scraper.getItems()
