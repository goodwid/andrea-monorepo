import React, { useState, useEffect } from 'react';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import { categoriesRef } from 'shared/services/firebase/firebaseRefs';
import styles from './Home.scss';
import Selector from 'components/selector/Selector';
import Picker from 'components/picker/Picker';
import Display from 'components/display/Display';

import data from '../../data/generator-data.json';

const Home = () => {
  const [content, setContent] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [data, loading, error] = useCollectionDataOnce(categoriesRef);

  console.log('data ', data);

  useEffect(() => {
    if (loading) return;
    const categoryTitles = data.map(({ title }) => title);
    setCategories(categoryTitles);
    setContent(categoryTitles);
  }, [data]);

  if (loading) return (<p>Loading...</p>);

  const categoryPickHandler = (i) => {
    setSelectedCategory(i);
  };

  const choicePickHandler = (choice) => {
    setContent(prev => {
      const newData = [...prev];
      newData[selectedCategory] = choice;
      return newData;
    });
  };

  const resetHandler = () => setContent(categories);

  return (
    <section className={styles.Home}>
      {/* <div className="selector">
        <Selector categories={categories} handler={categoryPickHandler} />
      </div>
      <aside>

        <div className="picker">
          <Picker category={data[selectedCategory]} handler={choicePickHandler} />
        </div>
        <div className="display">
          <Display content={content} reset={resetHandler}/>
        </div>
      </aside> */}
    </section>
  );
};

export default Home;
