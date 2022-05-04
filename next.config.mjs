/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_USER: 'Hikuro',
    MONGO_PASS: 'Next21221',
    DB_NAME: 'Formanglais',
    MONGO_URI: `mongodb+srv://Hikuro:Next21221@cluster0.q1kcl.mongodb.net/Formanglais?retryWrites=true&w=majority`,
    SECRET_KEY: 'Hikuro150322',
  }
}

export default nextConfig
