/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects () {
    return [
      { source: '/projects/:slug*', destination: '/#archivio', permanent: true },
      { source: '/about', destination: '/#chi-sono', permanent: true },
      { source: '/contact', destination: '/#contatti', permanent: true }
    ]
  }
}
