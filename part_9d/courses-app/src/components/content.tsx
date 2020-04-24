import React from 'react';

const Content: React.FC<{ courseParts: Array<{name: string; exerciseCount: number}>}> = ({ courseParts }) => {
  return (
    <div>
      <p>
      {courseParts[0].name} {courseParts[0].exerciseCount}
    </p>
    <p>
      {courseParts[1].name} {courseParts[1].exerciseCount}
    </p>
    <p>
      {courseParts[2].name} {courseParts[2].exerciseCount}
    </p>
    </div>
  )
};

export default Content;