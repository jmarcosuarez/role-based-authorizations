import React from 'react';

function Home({ tracks = [] }) {
  return (
    <div>
      <p>This is Home</p>
      {
        tracks.map((track, key) => {
          return <div className="track" key={key}>{track.title}</div>;
        })
      }
    </div>
  );
}

export default Home;
