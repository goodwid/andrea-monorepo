import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const parser = new Parser();

const Blog = () => {

  const [feed, setFeed] = useState(null);

  useEffect(() => {
    fetch(proxyUrl + 'https://medium.com/feed/@andrearosselle', {})
      .then(res => res.text())
      .then(xml => parser.parseString(xml))
      .then(data => setFeed(data))
      .catch(err => console.log('error: ', err));

  }, []);


  if (feed === null) {
    return (<h2>Loading...</h2>);
  }

  console.log(feed);
  return (
    <>
      <h3>Im the Blog!</h3>
      {feed.title}
      <img src={feed.image.url}></img>
    </>

  )
  ;
};

export default Blog;
