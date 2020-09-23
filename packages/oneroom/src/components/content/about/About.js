import React from 'react';
import styles from '../content.scss';
import CTA from 'components/cta/CTA';
import andrea from 'assets/andrea.jpg';
import collage from 'assets/harlem-renaissance-collage.jpg';

const About = () => {

  return (
    <div className={styles.content}>

      <h1>About the Instructor:</h1>
      <p>
        Andrea Rosselle has taught in school settings on three different continents and&nbsp;
        <img src={andrea} className="right" align="right"/>
        five different states. She has had the opportunity to teach in public, charter,
        international, and independent schools, and as an adjunct college instructor.
        The last decade she has been a Middle School Art Teacher in an <a
          href="https://www.oes.edu/">independent school in Portland Oregon</a>. With over
20 years experience as an <a
          href="https://www.researchgate.net/publication/291034623_Redefining_the_Artist_-Teacher">artist-teacher,</a>
&nbsp;she has a <a
          href="https://www.alfred.edu/academics/colleges-schools/college-ceramics/index.cfm">BFA
with a minor in Education</a>, an <a
          href="https://www.cmich.edu/colleges/cam/ART/Pages/default.aspx">MA in
Ceramics</a>, and a <a
          href="https://www.apu.edu/vpa/programs/mfa-in-visual-art/">MFA in the Visual
Arts</a>. Andrea is passionate about learning and sharing her knowledge with
students!
      </p>
      <h1>Teaching Philosophy:</h1>
      <p>
        <img src={collage} className="left" align="left"/>
      The granddaughter of two teachers, Andrea’s grandmother Audrey Madden Rosselle
graduated from a <a
          href="https://www.potsdam.edu/about/college-history">teacher’s college</a> in
upstate New York in the 1930’s. One of Audrey’s teaching assignments, when her
sons were young children, was in a <a href="http://www.townofbleecker.com/">one
room schoolhouse</a>. Andrea, whose father was Audrey’s middle child, grew up
with stories and influences of this rural schoolhouse. Many of the philosophies
inherent in the&nbsp;<a
          href="https://teaching.cornell.edu/teaching-resources/engaging-students/collaborative-learning">collaborative</a>,&nbsp;
        <a
          href="https://www.theedadvocate.org/philosophies-education-3-types-student-centered-philosophies/">progressivist</a>,&nbsp;
        <a
          href="https://library.educause.edu/topics/teaching-and-learning/competency-based-education-cbe">competency-based</a>&nbsp;schoolhouse model of education were instilled in Andrea through
family.
      </p>
      <p>
Many of the tenets of the one room schoolhouse model of education are embodied
in the educational philosophy of <strong>One Room Art House</strong> such as:
meeting a student where they are, focusing on empowering student interests,
flexible goals guided by student progress, and customized instruction directed
by student exploration.
      </p>
      <p>
The creative journey from fledgling maker to independent artist is unique to
each individual. Helping students discover their own unique creative voice lies
at the heart of the work Andrea does with all of her students. The creative
process is a broadly universal experience, we are all artists in our own way,
but understanding when, how, with what medium, and in what capacity you thrive
as an artist is not always obvious. Working with Andrea gives you a joyful
expert to take with you on that journey.
      </p>
      <CTA />
    </div>
  );
};

export default About;
