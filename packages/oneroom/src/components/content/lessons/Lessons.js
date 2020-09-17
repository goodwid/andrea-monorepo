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

      <h1>How and when are lessons?</h1>

      <p>
        Standard lessons are booked for 1 hour time slots, and last 50 minutes.  These can be
        scheduled weekly or bi-weekly, from September to June. Shorter lessons can be
        booked for current students, as needed.  These are half-hour time slots, and last
        25 minutes.  Lessons can be scheduled during weekdays, with the exception of Wednesday.
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

      <h1>
        So, how much does it cost?
      </h1>
      <p>
        Lesson pricing is being coordinated with a Private Lesson Program at an institution Andrea is working
        with. Stop back in the coming weeks for updates on lesson pricing. Pricing will be finalized by mid-September 2020.
      </p>

      <h1>
        What art supplies will you need?
      </h1>

      <p>
        <ul>
          <li><strong>Suggested Supplies: You only need to buy what is needed for your lessons.</strong></li>
          <li><strong>Value Drawing:</strong>
            <ul className="small-list">
              <li><a href="https://www.dickblick.com/products/blick-studio-drawing-pencils/">Pencils</a> in 4B, 2B, HB, 2H (A pencil set which includes these is ideal)</li>
              <li><a href="https://www.dickblick.com/items/20425-1004/">Conte Pencil</a> HB (or charcoal pencil)</li>
              <li><a href="https://www.dickblick.com/items/21334-2119/">grayscale markers</a></li>
              <li><a href="https://www.dickblick.com/products/pentel-hi-polymer-erasers/">a white eraser</a></li>
              <li><a href="https://www.dickblick.com/categories/drawing/pencils/sharpeners/">pencil sharpener</a></li>
              <li><a href="https://www.dickblick.com/products/canson-xl-sketch-pads/">drawing paper</a></li>
              <li><a href="https://www.dickblick.com/products/blick-studio-tracing-paper-pads/">tracing paper</a></li>
              <li>scrap paper</li>
            </ul>
          </li>
          <li><strong>Color Drawing:</strong>
            <ul className="small-list">
              <li><a href="https://www.dickblick.com/items/20049-1009/">Oil pastels</a></li>
              <li><a href="https://www.dickblick.com/items/20508-1209/">Prismacolor set</a></li>
              <li><a href="https://www.dickblick.com/items/20508-1010/">colorless blender</a></li>
              <li><a href="https://www.dickblick.com/items/21334-3109/">color brush pens</a></li>
              <li><a href="https://www.dickblick.com/products/maped-hand-held-sharpener/">pencil sharpener</a></li>
              <li><a href="https://www.dickblick.com/products/canson-xl-mix-media-pads/">mixed media paper</a></li>
              <li>pencil</li><li>scrap paper</li>
            </ul>
          </li>
          <li><strong>Watercolor Painting:</strong>
            <ul className="small-list">
              <li><a href="https://www.dickblick.com/items/00325-1029/">Watercolor paint tray</a> (including yellow ochre or mustard & brown)</li>
              <li><a href="https://www.dickblick.com/items/05890-1029/">watercolor brush set </a>(including at least one flat and one round tip brush)</li>
              <li><a href="https://www.dickblick.com/products/7-well-flower-palette/">mixing tray</a> or kitchen plate</li>
              <li><a href="https://www.dickblick.com/products/grumbacher-miskit-frisket/">Misket</a> (liquid frisket)</li>
              <li><a href="https://www.dickblick.com/items/23065-1134/">blue painters tape</a></li>
              <li><a href="https://www.dickblick.com/items/22945-1002/">drawing board</a> (heavy cardboard works), cup for water</li>
              <li><a href="https://www.dickblick.com/items/10180-1315/">watercolor paper</a> (cold press, 140lb)</li>
              <li>pencil</li><li>scrap paper</li>
            </ul>
          </li>
          <li><strong>Ink &amp; Brush:</strong>
            <ul className="small-list">
              <li><a href="https://www.dickblick.com/items/21101-2004/">India ink</a></li>
              <li><a href="https://www.dickblick.com/items/05412-9003/">bamboo brushes</a></li>
              <li><a href="https://www.dickblick.com/items/21334-2119/">grayscale markers</a></li>
              <li><a href="https://www.dickblick.com/items/09307-1001/">round tip #1 paintbrush</a></li>
              <li><a href="https://www.dickblick.com/items/10667-1012/">ink sketchpad</a> (mixed media or bristol sketchpads good too)</li>
              <li><a href="https://www.dickblick.com/products/pentel-hi-polymer-erasers/">white eraser</a></li>
              <li>scrap paper</li>
              <li>pencil</li>
            </ul>
          </li>
          <li><strong>Acrylic Painting:</strong>
            <ul className="small-list">
              <li><a href="https://www.dickblick.com/items/00711-9019/">Acrylic paint set</a> (primary colors plus black and white),</li>
              <li><a href="https://www.dickblick.com/items/03427-1007/">palette</a> or plastic plate,</li>
              <li><a href="https://www.dickblick.com/items/05564-0049/">acrylic paintbrush set</a> (including a ¾ or 1 inch flat tip brush)</li>
              <li><a href="https://www.dickblick.com/items/01610-1032/">gel medium</a></li>
              <li><a href="https://www.dickblick.com/items/08908-1004/">canvas pad</a></li>
              <li>cup for water</li>
              <li>drawing paper</li>
              <li>plastic wrap</li>
              <li>pencil</li>
              <li>eraser</li>
            </ul>
          </li>
          <li><strong>Mixed Media Collage:</strong>
            <ul className="small-list">
              <li><a href="https://www.dickblick.com/products/pacon-tru-ray-construction-paper/">Colored paper</a></li>
              <li><a href="https://www.dickblick.com/products/scotch-multi-purpose-scissors/">scissors</a></li>
              <li><a href="https://www.dickblick.com/items/56445-1011/">craft knife</a></li>
              <li><a href="https://www.dickblick.com/items/02916-1015/">matte mod podge</a></li>
              <li><a href="https://www.dickblick.com/items/00717-2159/">acrylic paints</a></li>
              <li><a href="https://www.dickblick.com/products/blick-essentials-craft-value-brush-set/">assorted paintbrushes</a></li>
              <li><a href="https://www.dickblick.com/products/sharpie-oil-based-paint-markers/">assorted oil-based markers</a></li>
              <li><a href="https://www.dickblick.com/items/13337-1007/">bristol pad</a></li>
              <li><a href="https://www.dickblick.com/items/57522-7506/">cutting mat</a> or scrap cardboard</li>
              <li>scrap paper</li>
              <li>pencil</li>
              <li>eraser</li>
              <li>scotch tape</li>
              <li>found papers (newspaper, old books, magazines, old photos, scrapbook papers, etc)</li>
            </ul>
          </li>
          <li><strong>Mixed Media Assemblage (Sculpture):</strong> Assorted scrap cardboard, paper bags any type, scrap paper any/all types,
            <ul className="small-list">
              <li><a href="https://www.dickblick.com/items/13111-1007/">tag board</a></li>
              <li><a href="https://www.dickblick.com/products/grafix-chipboard-assorted-pack-of-15/">chipboard</a></li>
              <li><a href="https://www.dickblick.com/items/24149-1012/">masking tape</a></li>
              <li><a href="https://www.dickblick.com/items/23884-1016/">tacky glue</a></li>
              <li><a href="https://www.dickblick.com/items/23605-0000/">hot glue gun</a> and <a href="https://www.dickblick.com/items/23617-1015/">glue sticks</a></li>
              <li><a href="https://www.dickblick.com/items/23886-1006/">school glue</a></li>
              <li><a href="https://www.dickblick.com/items/23065-1134/">blue painters tape</a></li>
              <li>scrap string/yarn/cord</li>
              <li>scrap fabric</li>
              <li>beads or buttons</li>
              <li>and a pencil</li>
            </ul>
          </li>
          <li><strong>Clay Sculpture:</strong> Please contact Andrea to talk about specific materials. Type of clay is dependent on if a student has access to a kiln, and specific sculptural goals.</li>
        </ul>
      </p>
      <CTA />
    </div>
  );
};

export default Lessons;
