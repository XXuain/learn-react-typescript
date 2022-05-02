import React from 'react';

const TodoList: React.FC<{ items?: string[] }> = ({ items }) => {
  if (!items) return <>Empty</>;
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default TodoList;
