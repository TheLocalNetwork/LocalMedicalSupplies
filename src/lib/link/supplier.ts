import { compact } from 'lodash';
import { CANONICAL_DOMAIN_NAME } from '~/lib/const';
import { type ISupplier } from '~/types/Supplier';

export const getSupplierLink = (supplier: ISupplier, includeDomain = false): string => {
  const slugParts = compact([
    supplier.provider_id,
    supplier.business_slug,
    supplier.practice_slug !== supplier.business_slug ? supplier.practice_slug : undefined,
  ]);
  return `${includeDomain ? CANONICAL_DOMAIN_NAME : ''}/supplier/${slugParts.join('~')}`;
};
