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
        What do remote art lessons look like?
      </h1>
      <div className="embed-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XsjHccfquZU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <h1>
        How do remote art lessons work?
      </h1>
      <p>
        At One Room Art House all lessons are virtual. You can be anywhere in the world, as long as you have a laptop, smart phone, or desktop (w/camera &amp; audio) that supports video chats (and an internet connection, of course!). <img src={desk} className="right" align="right"/>Andrea lives and works in the Pacific time zone, but she is a night owl. Andrea is open to working with you in whatever time zone you are in, and while art is a universal language, Andrea only speaks English. (She is very comfortable working with people who have English as their second language). Andrea is able to share artwork virtually, do live art demonstrations, and guide you through most processes via the Zoom app. There are even many museums with virtual tours of their art collections, so Andrea can take you on virtual field trips too! (If you’ve never used Zoom, no problem, she’ll help you with that).

      </p>

      <h1>Time: How long are the lessons?</h1>

      <p>
        Standard lessons are booked for 1 hour time slots, and last 50 minutes.  These can be scheduled weekly, bi-weekly, or monthly from September to June. Also, shorter lessons can be booked for current students, as example, for a check-in, or Q&amp;A session.  These are half-hour time slots, and last 25 minutes.  Lessons can be scheduled during weekdays, with the exception of Wednesday.
      </p>

      <h1>Tools: What do you need?</h1>

      <p>
        <img src={brushes} className="left" align="left" style={ { width: '280px', marginTop: '1em' } }/>
        You can start with a computer/phone (audio, video, wi-fi capable), paper and a pencil, and a corner of a room with a flat surface! Seriously, if you can draw and do a video-call- you can begin lessons. You can build your tools and materials “library” as you learn, and as you need it. You can also start with a studio full of art supplies. If you already have what you need, that’s wonderful. Everyone needs to spend money on art supplies when learning to create art, but it’s important to Andrea that you only buy what you need. So those decisions are made as you learn.
      </p>

      <h1>Since art lessons are tailored to each student, how does Andrea know what to teach?</h1>
      <p>
        This is a collaborative experience. Through discussions, taking virtual tours in museums, and explorations of art materials, together you and Andrea can discover what ‘speaks’ to you. Learning what you are drawn to, what excites your mind’s eye, and what colors, designs, or compositions you are attracted to- this all informs what would be exciting for you to learn. The discovery process of unearthing your artistic voice is so much fun! Andrea takes what she learns from her experiences with you, as well as your hopes and questions into account when she plans your lessons.
      </p>

      <h1>
        What art media does Andrea teach?
      </h1>
      <p>
        Andrea excels at teaching drawing, painting (acrylic and watercolor), two and three dimensional mixed media processes, as well as clay sculpture. She has also taught many other art mediums as a classroom art teacher, you name it, she’s probably tried it. If you want to inquire about specific art processes, please inquire via the Contact page.
      </p>
      <h1>What if I, or my child, don’t know what type of art lessons we want?</h1>
      <p>


        This is common, often the one thing people do know is “I want to make art”. That is a wonderful place to start!
        It means that the whole world of possibilities is before you.This is an adaptive process. It’s okay to start
        <img src={watercolor} className="right" align="right" style={ { width: '280px' } }/>
        with an idea like “I want to explore art”, or “I’ve always been drawn to blue”. When it is determined that Andrea has a lesson slot open for you, she will send you an “Interest Questionnaire”. By doing the questionnaire you will be giving Andrea insight into who you are and what unique things spark your creativity. (Parents, there is a separate questionnaire for young children that you can do with them). Before you commit to working with Andrea, you are able to schedule a brainstorming session, in a mini-lesson 25 minute time slot, where you can hear about possibilities.
      </p>

      <h1>
        So, how much does it cost?
      </h1>

      <p>
        Individual standard sessions are billed at $65 per session, and short sessions at $35 per session. Andrea can also teach One Room Art House Combined classes. These are small classes of 2-5 people composed of students who want to take a class together. These classes differ only in that the collective group of students determine the direction of the art lessons together. <strong>Combined classes can only be booked as a standard lesson, as short lesson periods do not lend themselves to groups.</strong>
      </p>
      <p>
        <table>
          <caption>
            Fee schedule for Combined Classes
          </caption>
          <thead>
            <th>No. Students</th>
            <th>Cost per student</th>
          </thead>
          <tr>
            <td>2</td>
            <td>$40</td>
          </tr>
          <tr>
            <td>3</td>
            <td>$35</td>
          </tr><tr>
            <td>4-5</td>
            <td>$30</td>
          </tr>
        </table>

      </p>
      <CTA />


    </div>
  );
};

export default Lessons;
