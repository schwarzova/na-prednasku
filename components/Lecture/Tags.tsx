import React from 'react';

import { Category } from '../../types';

type Props = {
  categories: Category[];
};

function Tags(props: Props) {
  return (
    <div className="flex items-end">
      {props.categories.map((cat) => (
        <div
          className="border border-indigo-400 rounded-lg mr-2 p-0.5 last:mr-0 sm:p-1"
          key={cat}
        >{`#${cat}`}</div>
      ))}
    </div>
  );
}

export default Tags;
