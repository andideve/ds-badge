import React from 'react';
import { ResponsiveValue, CSSProperties } from '@andideve/styled-system';
import { Theme } from '@andideve/ds-core';

export interface SystemProps {
  rounded?: ResponsiveValue<CSSProperties['borderRadius']>;
}

type ExtendOptions = SystemProps;

export type BadgeSizes = 'xs' | 'sm' | 'base'; // based on typography sizes
export type BadgeVariants = 'gray' | 'tinted' | 'outlined';
export interface BadgeOptions extends ExtendOptions {
  size?: BadgeSizes;
  variant?: BadgeVariants;
}
export interface BaseBadgeProps extends BadgeOptions {
  ref?: React.Ref<any>;
  as?: React.ElementType;
  theme?: Theme;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export type BadgeProps = BaseBadgeProps & React.HTMLAttributes<HTMLSpanElement>;
