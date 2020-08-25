import React, { useState } from 'react';
import styles from '../content.scss';
import CTA from 'components/cta/CTA';


const Blog = () => {

  const [feed] = useState(null);


  if (feed === null) {
    return (<div className={styles.content}>
      <p>Coming soon, watch this space closely.</p>
      <p style={ { fontSize: '7px' }}>whoa there, not that closely</p>
      <CTA />
    </div>);
  }

  return (
    <div className={styles.content}>
      <p>Im the Blog!</p>

    </div>

  );
};

export default Blog;

