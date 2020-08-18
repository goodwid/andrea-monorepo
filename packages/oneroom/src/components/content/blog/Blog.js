import React, { useState } from 'react';
import styles from '../content.scss';

const Blog = () => {

  const [feed] = useState(null);


  if (feed === null) {
    return (<div className={styles.content}>
      <p>Loading . . .</p>

    </div>);
  }

  return (
    <div className={styles.content}>
      <p>Im the Blog!</p>

    </div>

  )
  ;
};

export default Blog;
