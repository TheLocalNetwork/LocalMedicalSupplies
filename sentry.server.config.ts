// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: 'https://5a82aa60c86ec7db9ee857f8e0a379f4@o4506483016531968.ingest.sentry.io/4506483016728576',

  // Adjust this value in production, or use tracesSampler for greater control
  enableTracing: false,
  tracesSampleRate: 0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
