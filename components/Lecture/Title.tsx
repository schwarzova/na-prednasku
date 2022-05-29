import React from 'react';

import { Category } from '../../types';

type Props = {
  isOnline: boolean;
  isPropagated: boolean;
  title: string;
};

function Title(props: Props) {
  return (
    <div className="p-2 text-2xl bg-nabifli-black-card-top rounded-tl-lg rounded-tr-lg text-white flex justify-between sm:p-3">
      {props.title}
      <div className="flex">
        {props.isOnline && (
          <span title="online událost" className="mx-1 text-sm mt-2">
            🟢
          </span>
        )}
        {props.isPropagated && <div title="doporučená událost">🔥</div>}
      </div>
    </div>
  );
}

export default Title;
