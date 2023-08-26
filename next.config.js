/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    reactStrictMode: true,
    images: {
        domains: ['drive.google.com', "*.googleusercontent.com", "bansamyeak-school.vercel.app"]
    }
     
}

module.exports = nextConfig
