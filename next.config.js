/** @type {import('next').NextConfig} */

const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true
});

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includedPaths: [path.join(__dirname, 'scss')]
  }
}
