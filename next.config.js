/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    reactStrictMode: true,
    images: {
        domains: ['drive.google.com']
    }
     
}

module.exports = nextConfig
