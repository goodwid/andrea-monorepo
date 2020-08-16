
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
  path: '/lessons/:lessonId',
  component: Lessons,
  linkTo: (id) => `/courses/${id}`,
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
  component: About,
  linkTo: () => '/',

};
