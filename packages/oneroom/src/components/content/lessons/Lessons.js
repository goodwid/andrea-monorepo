import React from 'react';
import styles from '../content.scss';
import CTA from 'components/cta/CTA';
import desk from 'assets/home-desk.jpg';
import brushes from 'assets/brushes.jpg';
import watercolor from 'assets/watercolor.jpg';

const Lessons = () => {

  return (
    <div className={styles.content}>


      <h1>
        How do remote art lessons work?
      </h1>
      <p>
        <img src={desk} className="right" align="right"/>
        At One Room Art House all lessons are virtual. You can be anywhere in the world, as long
        as you have a video chat capable device (tablet, laptop, smartphone) and internet access.
        Andrea is able to share artwork virtually, do live art demonstrations, and guide you
        through most processes via the <a href="https://zoom.us/">Zoom</a> app. You will also need to be able to take and
        upload pictures of your artwork to share with Andrea.

      </p>

      <h1>What art media does Andrea teach?</h1>
      <p>
        <img src={brushes} className="left" align="left"/>
        Andrea excels at teaching drawing, painting (acrylic, ink, watercolor), mixed
        media collage and assemblage, as well as clay sculpture. She has also taught
        many other art mediums as a classroom art teacher. If you want to inquire about
        a specific art process, feel free to email Andrea at <a href="mailto:oneroomarthouse@gmail.com">andrea@oneroomarthouse.com</a>.
      </p>
      <h1>
        How are art lessons structured?
      </h1>
      <p>
        Lessons with Andrea focus on a number of core components: art historical and
        cultural integration, understanding the creative process, tools and techniques
        specific to artistic disciplines, and finding your authentic creative voice.
        Lessons are engineered to create accessible entry points into artistic concepts,
        student discovery, tangible skills, and to help students voice their inspiration
        and intent in the art making process.
      </p>

      <h1>
        If art lessons are tailored to each student, how does Andrea know what to teach?
      </h1>
      <p>
        <img src={watercolor} className="right" align="right"/>
        This is a collaborative experience. Through discussions, exploring artwork, creating
        together, and continued learning you and Andrea discover what works for you. The
        discovery process of unearthing your creative path and artistic voice is so much
        fun! Andrea takes what she learns from her experiences with you, as well as your
        hopes and questions into account when she plans your lessons. Before you commit to
        working with Andrea, you are able to schedule a brainstorming session, in a
        mini-lesson 25 minute time slot, where you can hear about possibilities.
      </p>

      <h1>How and when are lessons?</h1>

      <p>
        Standard lessons are booked for 1 hour time slots, and last 55 minutes.  These can be
        scheduled weekly, bi-weekly, or monthly.  Shorter lessons can be
        booked for current students, as needed.  These are half-hour time slots, and last
        30 minutes.  Lessons can be scheduled during weekdays, with the exception of Wednesday.
      </p>

      <h1>
        So, how much does it cost?
      </h1>
      <p>
        The cost for one student for a standard lesson is $75.  Andrea accepts groups on a
        case-by-case basis.  Please inquire if interested.  The shorter session is $35.
      </p>

      <CTA />
    </div>
  );
};

export default Lessons;
