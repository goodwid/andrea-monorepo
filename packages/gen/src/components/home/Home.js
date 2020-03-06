import React, { useState } from 'react';
import styles from './Home.scss';
import Selector from 'components/selector/Selector';
import Picker from 'components/picker/Picker';
import Search from 'components/search/Search';
import Display from 'components/display/Display';

const Home = () => {

  const [content, setContent] = useState('');

  return (
    <section className={styles.Home}>
      <div className="selector">
        <Selector />
      </div>
      <div className="picker">
        <Picker />
      </div>
      <aside>
        <div className="search">
          <Search />
        </div>
        <div className="display">
          <Display content={content} />
        </div>
      </aside>
    </section>
  );
};

export default Home;
