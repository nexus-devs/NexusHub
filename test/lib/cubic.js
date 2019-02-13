class Cubic {
  async await (node) {
    return new Promise(resolve => {
      const awaitInterval = setInterval(() => {
        try {
          if ((node === 'api' && cubic.nodes.api) || cubic.nodes[node].api) {
            resolve()
            clearInterval(awaitInterval)
          }
        }
        catch (err) {
          console.log(err)
        }
      }, 500)
    })
  }
}

module.exports = new Cubic()
