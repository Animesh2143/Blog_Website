import React from 'react';
import Card from './Card';

const Cards = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {blogs.map((blog) => (
        <Card key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default Cards;
