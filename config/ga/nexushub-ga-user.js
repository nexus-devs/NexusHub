const prod = process.env.NODE_ENV === 'production'

module.exports = {
  email: 'company-page@nexushub-ga.iam.gserviceaccount.com',
  clientId: '116601860147515971555',
  key: prod ? '/run/secrets/nexushub-ga-key' : `${__dirname}/nexushub-ga-private.pem`,
  ids: 'ga:126211225'
}
