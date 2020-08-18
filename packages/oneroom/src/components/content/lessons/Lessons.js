import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../content.scss';


const Lessons = () => {

  const { lessonId } = useParams();

  return (
    <div className={styles.content}>
      <p>I am lesson #{lessonId}</p>
    </div>
  );
};

export default Lessons;
