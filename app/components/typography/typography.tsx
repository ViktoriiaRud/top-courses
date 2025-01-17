import React from 'react';
import { CustomThemeColorType } from 'theme/styled.d';

import RichText from '../rich-text';

import { StyledTypography } from './typography.styles';

export type TypographyVariantType =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'body1';

export type TypographyComponentType = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div' | 'li' | 'cite';

export type TypographyType = {
  variant?: TypographyVariantType;
  component?: TypographyComponentType;
  color?: CustomThemeColorType;
  className?: string;
  html?: string;
};

const Typography = ({
  children,
  html,
  component = html ? 'div' : 'p',
  variant = 'body1',
  color = 'black',
  className,
}: React.PropsWithChildren<TypographyType>) => (
  <StyledTypography data-variant={variant} as={component} {...{ color, className }}>
    {html ? <RichText {...{ html }} /> : children}
  </StyledTypography>
);

export default Typography;
