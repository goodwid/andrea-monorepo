import Home from 'components/content/home/Home.js';

import About from 'components/content/about/About.js';
import Lessons from 'components/content/lessons/Lessons.js';
import Blog from 'components/content/blog/Blog.js';
import Contact from 'components/content/contact/Contact.js';

export const ABOUT = {
  path: '/about',
  component: About,
  linkTo: () => '/about',
};

export const LESSONS = {
  path: '/lessons',
  component: Lessons,
  linkTo: () => '/lessons',
};

export const BLOG = {
  path: '/blog',
  component: Blog,
  linkTo: () => '/blog',
};

export const CONTACT = {
  path: '/contact',
  component: Contact,
  linkTo: () => '/contact',
};

export const HOME = {
  path: '/',
  component: Home,
  linkTo: () => '/',

};
