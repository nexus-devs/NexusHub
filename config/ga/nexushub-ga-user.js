const fs = require('fs')
const docker = process.env.NODE_ENV === 'production' && process.env.DOCKER
const keyFile = docker ? '/run/secrets/nexus-ga-key' : `${__dirname}/nexushub-ga-private.pem`

module.exports = {
  email: 'company-page@nexushub-ga.iam.gserviceaccount.com',
  clientId: '116601860147515971555',
  key: fs.readFileSync(keyFile, 'utf-8'),
  viewId: '184710426'
}
