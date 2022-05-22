/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // If this were a real secret I would encode it and not just leave it plaintext
    catApiKey: '43e223d7-d665-4115-8d86-11024169f2ca',
    catAppUrl: 'https://api.thecatapi.com/v1',
    signingSecret: '3FC815D2-9FE1-4771-8F63-6151604ABF8E'
  }
}

module.exports = nextConfig
