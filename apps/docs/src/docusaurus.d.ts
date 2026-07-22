declare module '@theme/Layout' {
  import React from 'react';
  export interface LayoutProps {
    children?: React.ReactNode;
    title?: string;
    description?: string;
  }
  export default function Layout(props: LayoutProps): React.JSX.Element;
}

declare module '@docusaurus/Link' {
  import React from 'react';
  export interface LinkProps {
    to?: string;
    href?: string;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  }
  export default function Link(props: LinkProps): React.JSX.Element;
}

declare module '@theme/Head' {
  import React from 'react';
  export default function Head(props: { children?: React.ReactNode }): React.JSX.Element;
}
