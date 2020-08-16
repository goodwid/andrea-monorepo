import { ABOUT, LESSONS, BLOG, CONTACT, HOME } from 'routes/routes';

import {
  // FaUser as User,
  FaHome as Home,
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
    Icon: Home,
    to: ABOUT.linkTo(),
    title: 'About',
    label: 'Main screen of app',
    requiresAuth: false,
  },
  {
    Icon: Home,
    to: LESSONS.linkTo(),
    title: 'Lessons',
    label: 'Main screen of app',
    requiresAuth: false,
  },
  {
    Icon: Home,
    to: BLOG.linkTo(),
    title: 'Blog',
    label: 'Main screen of app',
    requiresAuth: false,
  },
  {
    Icon: Home,
    to: CONTACT.linkTo(),
    title: 'Contact',
    label: 'Main screen of app',
    requiresAuth: false,
  },
];
