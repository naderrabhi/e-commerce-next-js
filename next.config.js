/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains: [
            "images.pexels.com",
            "i.dummyjson.com/"
        ],
        remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            }
        ]
    }

}

module.exports = nextConfig
