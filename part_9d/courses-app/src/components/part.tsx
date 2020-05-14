import React from 'react';
import {CoursePart} from '../types'

const Part: React.FC<{part: CoursePart }> = ({part}) => {

  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  switch (part.name) {
    case "Fundamentals": 
      return (
        <div>
          <h2>{part.name}</h2>
          <p>{part.exerciseCount} exercises</p>
          <p>Course description: {part.description}</p>
        </div>
      )
    case "Using props to pass data":
      return (
        <div>
          <h2>{part.name}</h2>
          <p>{part.exerciseCount} exercises</p>
          <p>{part.groupProjectCount} group projects</p>
        </div>
      )
    case "Deeper type usage":
      return (
        <div>
          <h2>{part.name}</h2>
          <p>{part.exerciseCount} exercises</p>
          <p>Course description: {part.description}</p>
          <p> Exercise submission link: {part.exerciseSubmissionLink}</p>
        </div>
      )
    case "Typescript":
      return (
        <div>
          <h2>{part.name}</h2>
          <p>{part.exerciseCount} exercises</p>
          <p>Course description: {part.description}</p>
          <p> Experience: {part.experience}</p>
        </div>
      )
    default: 
      return assertNever(part);
  }
};

export default Part;