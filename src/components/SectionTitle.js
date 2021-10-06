import React from 'react';

export default function SectionTitle({ styleName, position, children }) {
  const styleProps = {
    textAlign: position,
  };
  return (
    <h4 style={styleProps} className={styleName}>
      {children}
    </h4>
  );
}
