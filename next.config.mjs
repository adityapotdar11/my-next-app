/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https', // Ensure the protocol is correct (usually 'https')
                hostname: 'www.xeni.com',
                port: '', // Leave empty if no specific port is used
                pathname: '/wp-content/uploads/**', // Use a wildcard if images are in a subdirectory
            },
        ],
    },
};

export default nextConfig;
