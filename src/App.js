import React from 'react';
import './style.css';
import Collapse from './collapse';

export default function App() {
  const data = [
    {
      title: 'head 1',
      content:
        'content 1 content 1 content 1 content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1',
    },
    { title: 'head 2', content: 'content 2' },
    { title: 'head 3', content: 'content 3' },
  ];

  return (
    <div>
      <Collapse data={data} />
    </div>
  );
}
