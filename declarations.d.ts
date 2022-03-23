declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.md' {
  const content: any;
  export default content;
}

declare namespace jest {
  interface AsymmetricMatcher {
    $$typeof: Symbol
    sample?: string | RegExp | object | Array<any> | Function
  }

  type Value = string | number | RegExp | AsymmetricMatcher | undefined;

  interface Options {
    media?: string
    modifier?: string
    supports?: string
  }

  interface Matchers<R> {
    toHaveStyleRule(property: string, value?: Value, options?: Options): R;
    toBeVisible(): R;
  }
}
