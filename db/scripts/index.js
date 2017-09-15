const scraper = require("./scraper.js")
const getData = async () => {
  let items = await scraper.getItems();
}

getData()
