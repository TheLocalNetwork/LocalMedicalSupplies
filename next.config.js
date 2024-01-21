const { withSentryConfig } = require('@sentry/nextjs');
const stateRedirects = require('./config/state-redirects');

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const hostRedirects = [];
    if (isProd) {
      hostRedirects.push({
        source: '/:path*',
        missing: [{ type: 'host', value: 'local-medical-supplies.com' }],
        destination: 'https://local-medical-supplies.com/:path*',
        permanent: true,
      });
    }

    return [...hostRedirects, ...stateRedirects];
  },
  output: 'standalone',
  assetPrefix: isProd ? 'https://d1mrgj7hb0ys1t.cloudfront.net' : undefined,
  typescript: {
    ignoreBuildErrors: isProd,
  },
};

// Injected content via Sentry wizard below
const nextConfigWithSentry = withSentryConfig(
  nextConfig,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: 'the-local-network-75',
    project: 'localmedicalsupplies',
    authToken: process.env.SENTRY_AUTH_TOKEN,
  },
  {
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
    // // For all available options, see:
    // // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // // Upload a larger set of source maps for prettier stack traces (increases build time)
    // widenClientFileUpload: true,

    // // Transpiles SDK to be compatible with IE11 (increases bundle size)
    // transpileClientSDK: false,

    // // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    enableTracing: false,
    // tunnelRoute: '/monitoring',
    // tracesSampleRate: 0,

    // // Hides source maps from generated client bundles
    // hideSourceMaps: true,

    // // Automatically tree-shake Sentry logger statements to reduce bundle size
    // disableLogger: true,
  }
);

module.exports = nextConfigWithSentry;
