import React from "react";

const VideoCards = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="mx-2 mr-5 p-2 w-60  shadow-lg  ">
      <img
        src={thumbnails.medium.url}
        alt="thumbnails"
        className="rounded-lg"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCards;
