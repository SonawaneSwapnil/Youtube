import React, { useEffect, useState } from "react";
import { YOUTUBE_VEDIOS_API } from "../utils/constant";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
import ButtonList from "./ButtonList";

export default function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs(setSongs);
  }, [songs]);

  const getAllSongs = async () => {
    const data = await fetch(YOUTUBE_VEDIOS_API);
    const json = await data.json();

    setSongs(json.items);
  };
  return (
    <div>
      <ButtonList />
      <div className="flex flex-wrap">
        {songs.map((song) => (
          <Link to={"/watch?v=" + song.id}>
            <VideoCards key={song.id} info={song} />;
          </Link>
        ))}
      </div>
    </div>
  );
}
