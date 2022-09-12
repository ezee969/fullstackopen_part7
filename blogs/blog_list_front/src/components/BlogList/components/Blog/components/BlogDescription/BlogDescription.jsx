import React from 'react';

export default function BlogDescription({ url, likes, author, selected }) {
  const content = 'max-h-0';
  const contentShow = 'h-auto max-h-screen';

  return (
    <div
      className={`blog-description ${
        selected ? contentShow : content
      } transition-all duration-200 overflow-hidden`}
    >
      <ul className="font-medium">
        <li>URL: {url}</li>
        <li>Likes: {likes}</li>
        <li>Author: {author}</li>
      </ul>
    </div>
  );
}
