import { Link } from '~/components/catalyst/link';
import { CANONICAL_DOMAIN_NAME, CANONICAL_SITE_NAME } from '~/lib/const';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="">
      <div className="mx-auto max-w-5xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            <span>
              &copy; 2012-{currentYear} <Link href={CANONICAL_DOMAIN_NAME}>{CANONICAL_SITE_NAME}</Link>.
            </span>
          </p>
          <p className="text-center text-xs leading-5 text-gray-500">All rights reserved.</p>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            <a target="_blank" href="http://the-local-network.com">
              Powered by The Local Network, LLC
            </a>
          </p>
          <p className="text-center text-xs leading-5 text-gray-500">
            <a target="_blank" href="https://data.cms.gov/provider-data/search?theme=Supplier+directory">
              Data Courtesy of CMS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
