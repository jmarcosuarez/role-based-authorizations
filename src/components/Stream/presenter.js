import React from 'react';

function Stream({ tracks = [] }) {
  return (
    <div>
      <p>This is Stream</p>
      {
        tracks.map((track, key) => {
          return <div className="track" key={key}>{track.title}</div>;
        })
      }
    </div>
  );
}

export default Stream;
