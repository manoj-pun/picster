import React from 'react';
import Stories from './Stories';
import Feed from './Feed';

const MiddleContent = () => {
  return (
    <div className="flex flex-col h-full">
      <Stories />
      <Feed />
    </div>
  );
};

export default MiddleContent;
