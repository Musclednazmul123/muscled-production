import React, { HTMLProps, Ref } from 'react';
import { IconWrapper } from 'Styles/icon.style';

export type IconProps = HTMLProps<HTMLButtonElement> & { _ref?: Ref<HTMLButtonElement> };

export default function Icon({ _ref, ...rest }: any) {
  return <IconWrapper type="button" {...rest} {...(_ref && { ref: _ref })} />;
}
