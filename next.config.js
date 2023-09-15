/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_TOKEN: process.env.API_TOKEN,
        URL_NASA: process.env.URL_NASA,
    },
    images: {
        domains: ['mars.jpl.nasa.gov', 'mars.nasa.gov'],

    },
}

module.exports = nextConfig
