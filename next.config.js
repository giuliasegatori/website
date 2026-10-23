/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // The site is fully static: `next build` writes it to /out, which Netlify publishes.
  // Redirects from the old pages live in netlify.toml.
  output: 'export'
}
