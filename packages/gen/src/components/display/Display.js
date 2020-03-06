import React from 'react';
import propTypes from 'prop-types';
import styles from './Display.scss';

const Display = ({ content }) => {

  return (
    <section className={styles.Display}>
      <textarea value={content} readOnly ></textarea>
    </section>
  );
};

Display.propTypes = {
  content: propTypes.string,
};

export default Display;
