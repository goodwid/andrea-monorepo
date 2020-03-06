import React from 'react';
import styles from './Picker.scss';
import { useCategory } from 'hooks/comment';
let i = 0;

const Picker = () => {

  const  [choice, addChoice, allChoices, choose, title] = useCategory({ title: 'test', choices: ['foo', 'bar'] });

  const handleButton = () => {
    addChoice('Testing, ' + i++);
    choose(i);
    console.log('click');
  };
  return (
    <section className={styles.Picker}>
      <button onClick={handleButton}>choose</button>
      title: {title}<br />
      choise: {allChoices.join('\n')}
    </section>
  );
};

export default Picker;
