import React from 'react';
import { useParams } from 'react-router-dom';

const Lessons = () => {

  const { lessonId } = useParams();

  return (<h3>Im Lesson #{lessonId}</h3>);
};

export default Lessons;
