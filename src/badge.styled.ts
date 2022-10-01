import styled, { CSSObject, FunctionInterpolation } from '@emotion/styled';
import { system, get, runIfFn, ThemeKey } from '@andideve/styled-system';
import transparentize from 'polished/lib/color/transparentize';

import defaults from './badge.defaults';
import { SystemProps, BadgeSizes, BadgeVariants, BadgeProps } from './badge.types';

function size(sizes: Record<BadgeSizes, CSSObject>) {
  return ({ size = defaults.size }: BadgeProps = {}) => sizes[size];
}

function variant(variants: Record<BadgeVariants, CSSObject | GetCSSFn<BadgeProps>>) {
  return ({ theme, size = defaults.size, variant = defaults.variant }: BadgeProps = {}) => {
    const props = { theme, size, variant };
    return runIfFn(variants[variant], props);
  };
}

type GetCSSFn<P = any> = (props: P) => CSSObject;

const styles: (CSSObject | FunctionInterpolation<BadgeProps>)[] = [
  {
    padding: '.25rem .5rem',
  },
  size({
    xs: {
      fontSize: 'var(--ds-fontSizes-xs)',
      lineHeight: 'var(--ds-lineHeights-4)',
      fontWeight: 'var(--ds-fontWeights-semibold)',
    },
    sm: {
      fontSize: 'var(--ds-fontSizes-sm)',
      lineHeight: 'var(--ds-lineHeights-5)',
      fontWeight: 'var(--ds-fontWeights-semibold)',
    },
    base: {
      fontSize: 'var(--ds-fontSizes-base)',
      lineHeight: 'var(--ds-lineHeights-6)',
      fontWeight: 'var(--ds-fontWeights-semibold)',
    },
  }),
  variant({
    gray: {
      color: 'var(--ds-colors-foreground-primary)',
      backgroundColor: 'var(--ds-colors-background-elevated-secondary)',
    },
    tinted({ theme }) {
      return {
        color: 'var(--ds-colors-accent)',
        backgroundColor: transparentize(0.85, get('colors.accent', theme) as string),
      };
    },
    outlined: {
      color: 'var(--ds-colors-foreground-primary)',
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 0.125rem var(--ds-colors-separator-default)',
    },
  }),
  system<SystemProps>({
    rounded: {
      property: 'borderRadius',
      scale: ThemeKey.radii,
    },
  }),
];

export const Styled = styled.span(...styles);

export default Styled;
