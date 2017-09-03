const Blitz = require('blitz-js-query')
const blitz = new Blitz({
  user_key: 'zgmSt89rCX1LC7xsRUGrv2ejtipJwbavKO8H8FCBZmBW5nkgvIabkfYbcaeUGq0I1JsziD1u74rbzUMBF4Js7WzXLzuH0v27ub1GAJkhnkKAH41iN1pdbnbzlqfmHwYLsrfFt3r7eGtY7hxMBRTKVhljdRnS5RyOfUtzvBTH2mQeTmcKIKdnKgIo6FmegPEPHK7dyKb9WFYO1F6d09jT7nqGGDQSrTfXEqgxTNQVYwiTv0J3oCABk0Vi0TWFThj1',
  user_secret: 'DKOGOux2752aLXXd9SnAARZLIrikwSgEVcviDsuKkJ9u9OMqJhtYT8w2nfkKvIhDEbCHrzkudC9fGA30u5d51ChHI0AyFJB1Gdfh7oaYMVgK86Wcn6ExZ2RM5WXXzY7aS8EdEle2WR64TXQDvgmFdnN66UQD2iDAjMzjlVtXvtbSfJzxxvQQ4lxmbe0IB0d1eTpL9b6xA5nyJfdruOfdcO9NBi4odnvMWGqvZ8GmeK0NJm3takqWsYW7gNRUuZKD'
})

setInterval(() => {
  blitz.post('/notifications', {
    game: 'warframe',
    message: {
      title: 'Random Number Time!',
      content: Math.random()
    }
  })
}, 6500)
