import React, {useRef} from 'react';

export const RenderCounter: React.FC<{id: number|string}> = ({id}) => {
  const renderCount = useRef(0);
  renderCount.current++;
  console.log(`Render counter ${id}: ${renderCount.current}`);
  return <div>{id}: {renderCount.current}</div>
};
