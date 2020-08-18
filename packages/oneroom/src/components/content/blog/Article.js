import React from 'react';

const Article = ({ data }) => {

  const { creator, title, pubDate } = data;

  console.log('data: ', data);
  return (
    <article>
      <title>{title}</title>
      <h3>by {creator}</h3>
      <h4>{pubDate}</h4>
      <p>{data['contentSnippet']}</p>
    </article>
  );
};

export default Article;
