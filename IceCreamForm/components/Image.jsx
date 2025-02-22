import React from 'react';

function Image({ source, width, enabled, id }) {
  if (!enabled) {
    return null;
  }

  return (
    <img src={source} width={width} alt={id} id={id} />
  );
}

export default Image;
