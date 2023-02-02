/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig


const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  experimental: {
    scrollRestoration: true,
  }

}
