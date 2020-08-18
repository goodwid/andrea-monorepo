import React from 'react';
import styles from '../content.scss';

const Home = () => {

  return (
    <div className={styles.content}>
      <h1>Individualized Art Instruction Tailored Specifically to You!</h1>
      <p className="content">
        One Room Art House is a virtual learning experience that can take place in whatever space
        you have set aside for your creativity! Whether in an art studio or at the dining room table,
        you can bring an art instructor to you via technology. Andrea Rosselle, an experienced artist
         teacher, provides live synchronous lessons, critiques, demonstrations, and discussions
         specifically tailored to your artistic needs. Andrea has worked with art students ages
         2 to 72. With over twenty years of teaching experience she is adept at guiding students
         through the creative process. Experienced in a wide variety of artistic media, Andrea is
         a student-centric teacher who believes in collaborative learning. When working with Andrea,
         a student’s interests, struggles, curiosities, and successes guide the journey of their
         art instruction.
      </p>
    </div>
    );
};

export default Home;
