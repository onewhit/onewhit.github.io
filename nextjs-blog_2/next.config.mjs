/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
      images: {
          loader: 'akamai',
          path: '',
      },
      assetPrefix: './',
  }
  
  export default nextConfig