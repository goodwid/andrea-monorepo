import React from 'react';
import styles from '../content.scss';
import CTA from 'components/cta/CTA';
import table from 'assets/table.jpg';


const Home = () => {

  return (
    <div className={styles.content}>
      <h1>Instruction For Young Artists</h1>
      <h2>Creativity &#8285; Wonder &#8285; Joy &#8285; Making</h2>
      <p className="content">
        <img className="right" src={table} align="right" />
        One Room Art House is a virtual learning experience, where artist-teacher
        Andrea Rosselle provides live synchronous art lessons to individual students or
        small groups. With over twenty years of teaching experience Andrea is adept at
        guiding students through the creative process. Experienced in a wide variety of
        art media, Andrea is a student-centric teacher who believes in collaborative learning.
      </p>
      <h1>
        Curious about lessons?
      </h1>
      
      <div className="embed-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XsjHccfquZU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>


      <CTA />
    </div>
  );
};

export default Home;
