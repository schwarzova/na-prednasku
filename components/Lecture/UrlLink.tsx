import React from 'react';

type Props = {
  infoUrl: string;
};

function UrlLink(props: Props) {
  return (
    <a
      className="p-2 bg-gradient-to-r from-indigo-700 to-red-500 rounded-lg w-40 text-white hover:from-indigo-700 hover:to-indigo-700 focus:outline outline-offset-2 outline-1 outline-purple-600"
      href={props.infoUrl}
      target="_blank"
      rel="noreferrer"
    >
      Odkaz na událost
    </a>
  );
}

export default UrlLink;
