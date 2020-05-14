import React from "react";
import ReactDOM from "react-dom";
import Header from './components/header';
import Content from './components/content';
import { CoursePart } from './types'
import Total from './components/total';

const App: React.FC = () => {
  const courseName = "Half Stack application development";
  

  // new types

// this is the new coursePart variable
const courseParts: Array<CoursePart> = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is an awesome course part"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
  },
  {
    name: "Typescript",
    exerciseCount: 26,
    description: "A lot of work with Types",
    experience: 'Hard',
  }
];

  return (
    <div>
      <Header name={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
