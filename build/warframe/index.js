const scraper = require("./scraper.js")

process.on('uncaughtExeption', err => {
  console.log(err)
})
process.on('unhandledRejection', err => {
  console.log(err)
})

scraper.getItems()
