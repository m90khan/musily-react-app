import React from 'react';

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="song-container">
      <img className={isPlaying ? 'rotateSong' : ''} src={currentSong.cover} alt="" />
      <h1>{currentSong.name}</h1>
      <h5>{currentSong.artist}</h5>
    </div>
  );
};

export default Song;
