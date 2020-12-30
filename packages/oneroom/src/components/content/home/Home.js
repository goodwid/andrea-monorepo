import React from 'react';
import styles from '../content.scss';
import CTA from 'components/cta/CTA';
import house from 'assets/house.png';

const Home = () => {

  return (
    <div className={styles.content}>
      <h1>Instruction For Young Artists</h1>
      <h2>Creativity &#8285; Wonder &#8285; Joy &#8285; Making</h2>
      <p className="content">
        <img className="right" src={house} align="right" style={{ width: 'auto', height: '420px' }}/>
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2Yzz9H5uW6A" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <h1>
        Student Appreciations
      </h1>
      <p style={ { textIndent: 0 } }>
        Dear Ms Rosselle,<br />
        Thank you for being such an open teacher. I really enjoyed being able to choose what I wanted to do, and how long I wanted to work on it … I really appreciate your teaching style.
        <br />Thanks again, Sarah
        <br /><br />
        Dear Ms. Rosselle,<br />
        I really appreciate your kindness, patience, and sense of humor.
        <br />Love, Deniz
        <br /><br />
        Dear Ms. Rosselle,<br />
        Thank you for being an amazing supportive teacher who respects everyone&apos;s ideas. You make me love art every single day. I can not wait to continue art. Thank you.
        <br />Love, Maya
        <br /><br />
        Dear Ms. Rosselle,<br />
        I have learned so much, and I am so grateful that I had you as my teacher. I want to say thank you for helping me and supporting me as I am going into Advanced Drawing. I am so excited!
        <br />Thanks again, Kara
        <br /><br />
        Dear Ms Rosselle,<br />
        I am so happy I had the chance to have you as a teacher. Art has always been a favorite subject, but your teaching is what makes it so much fun. I am thankful for everything you have taught me, you have inspired me to work hard and to love what I do, so thank you.
        <br />Sincerely, Ada
      </p>

      <h1>
        Parent Appreciations
      </h1>
      <p>
        Andrea is an outstanding teacher and we are truly grateful that our daughter has been able to learn and grow under her guidance. She takes the time to understand our daughter’s interests and current ability and is able to meet her where she is and move her forward in a way that allows her creativity to blossom. I am impressed with how Andrea has been able to use technology and this online setting to enhance her lessons. These lessons have far exceeded our expectations.
        <br />Liz Weiler
      </p>
      <p>
        Andrea is a truly gifted teacher in a variety of media and with many ages of children.  I have watched her work with children from toddler through high school age, adapting her teaching to their developmental needs and interests.   She has taught my 2 energetic boys (now 10 and 12) for more than 4 years — she remembers their particular passions and gifts from week to week and often has ideas in mind that both appeal to them and move their learning in a new direction.  They are always excited to see her and to show me the work they have made with her help.
        <br />Emily Guimaraes

      </p>
      <p>
      Andrea’s enthusiasm and passion for teaching art is infectious, so is her laughter! She models curiosity and joy for her craft and inspires students to explore their artistic senses-she has a beautiful way of showing students how to create with an eye for design and visual composition.
        <br />Jennifer Futrell
      </p>
      <CTA />
    </div>
  );
};

export default Home;
