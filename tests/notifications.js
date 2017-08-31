const Blitz = require('blitz-js-query')
const blitz = new Blitz({
  user_key: 'dev',
  user_secret: 'dev'
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
