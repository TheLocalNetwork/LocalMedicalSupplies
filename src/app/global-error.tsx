'use client';

import * as Sentry from '@sentry/nextjs';
import NextError from 'next/error';
import { useEffect } from 'react';

interface INextGlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}
const NextGlobalError: React.FC<INextGlobalErrorProps> = ({ error }) => {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <NextError statusCode={500} title={`${error.name}:${error.message}`} />
      </body>
    </html>
  );
};

export default NextGlobalError;
