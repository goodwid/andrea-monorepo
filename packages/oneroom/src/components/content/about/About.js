import React from 'react';
import styles from '../content.scss';
import CTA from 'components/cta/CTA';
import andrea from 'assets/andrea.jpg';
import gluing from 'assets/gluing.jpg';
import collage from 'assets/harlem-renaissance-collage.jpg';
import close from 'assets/chuck-close-portrait.jpg';

const About = () => {

  return (
    <div className={styles.content}>
      <h1>About the Instructor</h1>
      <p>
        “I follow you. One of the wonderfully brilliant things about participating in individualized art lessons is that curiosity&nbsp;
        <img src={andrea} className="right" align="right"/>
        is the guide! What are you interested in? A period in Art History, a watercolor painting technique, or a conceptual theory about your creative process. Maybe, you’ve never understood color theory, or you want to learn to talk about art. With individualized art lessons, the journey is collaborative. Together we, the student and teacher, decide what comes next on the artistic path. It’s like taking a mentor along with you on your path to becoming an accomplished artist.”
        <span className="tagline">
          -&nbsp;Andrea&nbsp;Rosselle
        </span>
      </p>
      <h1>Teaching Philosophy</h1>
      <p>
        The granddaughter of two teachers, Andrea’s grandmother Audrey Madden Rosselle graduated from a teacher’s college in&nbsp;
        <img src={collage} className="left" align="left"/>
        upstate New York in the 1930’s. One of Audrey’s teaching assignments, when her sons were young children, was in a one
        room schoolhouse in Bleecker Stage. Andrea, whose father was Audrey’s middle child, grew up with stories and influences
        of this rural schoolhouse. Many of the philosophies inherent in the collaborative, progressivist, competency based
        schoolhouse model of education were instilled in Andrea at a young age. Unbeknownst to her, Andrea’s teaching philosophy
        started to form through interactions with her family throughout her formative years.
      </p>
      <p>
        During her undergraduate education, Andrea’s student teaching experience created in her a love of teaching through an
        <img src={close} className="right" align="right" style={ { width: '280px' } }/>
        Art Historical lens. Learning about the lives, practices, inspirations, and movements of artists and cultures, who have
        come before us, gives us an understanding of where our own art practices fit chronologically, materially, and philosophically
        within the greater Artistic Community. Andrea believes history and context matter when creating in the styles and
        traditions of those who’ve come before us. She believes in looking deeply behind us, knowing the history of the tools,
        techniques, and concepts we use while ** dreaming into the future.
      </p>
      <p>
        As part of her graduate school education Andrea’s teaching philosophy was even further refined. A co-joining of the
         disciplines of artist, teacher, and researcher enabled Andrea to further explore the diverse web of learning and teaching
         processes within the greater field of Visual Art. Coming to understand the deeper semiology of the Visual Culture we
         live in, Andrea became an avid explorer of how to make meaning with a visual language. Exploring how we visually
         communicate, express self, and form identity as artists became a central theme to her work with students.
      </p>
      <p>
        <img src={gluing} className="left" align="left" style={ { width: '320px' } }/>
        Alongside Andrea’s exploration as a teacher has been her own artistic practice. A ceramic sculptor, painter, and mixed
        media artist, she has explored tools, techniques, and materials throughout her career. Knowing the how and why of a

        material&apos;s properties is an important skill set for both an artist and teacher. Andrea has also explored a
        variety of ways to engage the creative process, and enjoys rearranging the procedural framework for how we engage
        in making art. As an instructor she is open to exploration and skillfully aware of how best to guide a student’s
        artistic journey.
      </p>
      <p className="indent-bold">
        One Room Art House is born of a vision to teach people exactly where they are. It is born of years of Andrea’s
        experience fused together with an ability to curate and define a creative path for anyone she works with.
        The creative journey from fledgling maker to independent artist is unique to each individual. Helping students
        discover their own unique creative voice lies at the heart of the work Andrea does with all of her students. The
        creative process is a broadly universal experience, we are all artists in our own way, but understanding when, how,
        with what medium, and in what capacity you thrive as an artist is not always obvious. Working with Andrea gives
        you a joyful expert to take with you on that journey.
      </p>
      <h1>Experience</h1>
      <p>
      Andrea Rosselle has taught in school settings on three different continents and five different states. She has had
      the opportunity to teach in public, charter, international, and independent schools, and as an adjunct college
      instructor. Over the last decade, she has been a Middle School Art Teacher in an&nbsp;
        <a href="https://www.oes.edu/" target="blank" rel="noopener noreferrer" >
          independent school in Portland Oregon.
        </a>
      &nbsp;With over 20 years experience as an&nbsp;
        <a href="https://www.researchgate.net/publication/291034623_Redefining_the_Artist_-Teacher" target="blank" rel="noopener noreferrer">
          artist-teacher,
        </a>
        &nbsp;she has a&nbsp;
        <a href="https://www.alfred.edu/academics/colleges-schools/college-ceramics/index.cfm" target="blank" rel="noopener noreferrer">
          BFA with a minor in Education
        </a>
        , an&nbsp;
        <a href="https://www.cmich.edu/colleges/cam/ART/Pages/default.aspx" target="blank" rel="noopener noreferrer">
          MA in Ceramics
        </a>
        , and an&nbsp;
        <a href="https://www.apu.edu/vpa/programs/mfa-in-visual-art/" target="blank" rel="noopener noreferrer">
          MFA in the Visual Arts.
        </a>
        &nbsp;Andrea is passionate about learning and sharing her knowledge with students!
      </p>
      <CTA />
    </div>
  );
};

export default About;
