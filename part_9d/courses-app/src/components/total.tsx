import React from 'react';

const Total: React.FC<{ courseParts: Array<{ exerciseCount: number }> }>= ({courseParts}) => {
  return (
    <div>
      <p>
        Total number of exercises{" "}
        {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </div>
  );
};

export default Total;