import React from 'react';

import { Category } from '../../types';

type Props = {
  isOnline: boolean;
  isPropagated: boolean;
  title: string;
};

function Title(props: Props) {
  return (
    <div className="p-3 text-2xl bg-nabifli-black-card-top rounded-tl-lg rounded-tr-lg text-white flex justify-between">
      {props.title}
      <div className="flex">
        {props.isOnline && (
          <span title="online událost" className="mr-1 text-sm mt-2">
            🟢
          </span>
        )}
        {props.isPropagated && <div title="propagovaná událost">🔥</div>}
      </div>
    </div>
  );
}

export default Title;
