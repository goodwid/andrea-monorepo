import React, { useEffect } from 'react';
import styles from '../content.scss';
import CTA from 'components/cta/CTA';

const widgetParams = {
  renderTo: '#medium-widget',
  params: {
    'resource':'https://medium.com/@oneroomarthouse',
    'postsPerLine':2,
    'limit':4,
    'picture':'big',
    'fields':['description', 'author', 'claps', 'likes', 'publishAt'],
    'ratio':'square' }
};

const Blog = () => {

  useEffect(() => {
    window.MediumWidget.Init(widgetParams);
    return () => {
      window.MediumWidget.unmount();
    };
  }, []);

  return (
    <div className={styles.content}>
      <h1>Developing resources for students and community</h1>
      <p>
        Andrea writes articles on Medium related to Art Education and her experiences as an artist and educator.
      </p>

      <div id="medium-widget"></div>
      <CTA />
    </div>

  );
};

export default Blog;
