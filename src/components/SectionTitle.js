import React from 'react';

export default function SectionTitle({ styleName, position, children, fontColor }) {
  const styleProps = {
    textAlign: position,
    color: fontColor
  };
  return (
    <h4 style={styleProps} className={styleName}>
      {children}
    </h4>
  );
}
