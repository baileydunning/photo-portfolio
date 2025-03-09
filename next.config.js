/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SITE_URL: 'https://next-material-photo-portfolio.pages.dev',
        name: 'Bailey Dunning'
    },
    images: {
        unoptimized: true,
    },
    output: 'export',
    staticPageGenerationTimeout: 300,
}

module.exports = nextConfig
