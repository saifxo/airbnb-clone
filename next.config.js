/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["links.papareact.com"]
  },
  env:{mapbox_key:'pk.eyJ1Ijoic2FpZnhvIiwiYSI6ImNsN2VmaTBsbTExM2szbnFjM2tmdHg3aW0ifQ.kvryOj6WSiQr3w-UMnEN_w'}
}
