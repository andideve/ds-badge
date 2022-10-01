import React, { forwardRef } from 'react';

import defaults from './badge.defaults';
import Styled from './badge.styled';
import { BaseBadgeProps } from './badge.types';

export function createBadge<T = HTMLSpanElement, P = React.HTMLAttributes<HTMLSpanElement>>(
  tag: keyof JSX.IntrinsicElements = 'span',
) {
  const Component = Styled.withComponent(tag);
  return forwardRef<T, P & BaseBadgeProps>(
    (
      {
        children,
        size = defaults.size,
        variant = defaults.variant,
        rounded = defaults.rounded,
        ...rest
      },
      ref,
    ) => (
      <Component ref={ref} size={size} variant={variant} rounded={rounded} {...rest}>
        {children}
      </Component>
    ),
  );
}

export const Badge = createBadge();

export default Badge;
