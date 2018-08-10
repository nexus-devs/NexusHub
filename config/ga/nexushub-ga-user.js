const docker = process.env.NODE_ENV === 'production' && process.env.DOCKER
const fs = require('fs')

module.exports = {
  email: 'company-page@nexushub-ga.iam.gserviceaccount.com',
  clientId: '116601860147515971555',
  key: docker ? fs.readFileSync('/run/secrets/nexus-ga-key').trim() : `${__dirname}/nexushub-ga-private.pem`,
  ids: 'ga:126211225'
}
