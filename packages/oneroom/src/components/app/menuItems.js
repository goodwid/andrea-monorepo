import { ABOUT, LESSONS, BLOG, CONTACT, HOME } from 'routes/routes';

import {
  // FaUser as User,
  FaUserCircle as About,
  FaHome as Home,
  FaPaintBrush as Lessons,
  FaMediumM as Blog,
  FaPhone as Contact,
} from 'react-icons/fa';



export default [
  {
    Icon: Home,
    to: HOME.linkTo(),
    title: 'Home',
    label: 'Main screen of app',
    requiresAuth: false,
  },
  {
    Icon: About,
    to: ABOUT.linkTo(),
    title: 'About',
    label: 'Main screen of app',
    requiresAuth: false,
  },
  {
    Icon: Lessons,
    to: LESSONS.linkTo(),
    title: 'Lessons',
    label: 'Main screen of app',
    requiresAuth: false,
  },
  {
    Icon: Blog,
    to: BLOG.linkTo(),
    title: 'Blog',
    label: 'Main screen of app',
    requiresAuth: false,
  },
  {
    Icon: Contact,
    to: CONTACT.linkTo(),
    title: 'Contact',
    label: 'Main screen of app',
    requiresAuth: false,
  },
];
