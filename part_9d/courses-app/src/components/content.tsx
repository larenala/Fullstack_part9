import React from 'react';
import Part from './part';
import { CoursePart } from '../types'

const Content= ({ courseParts}: {courseParts: CoursePart[]}) => {
  return (
    <div>
      <Part part={courseParts[0]}/>
      <Part part={courseParts[1]}/>
      <Part part={courseParts[2]}/>
      <Part part={courseParts[3]}/>
    </div>
  )
};

export default Content;