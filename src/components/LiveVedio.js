import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import { YOUTUBE_VEDIOS_API } from "../utils/constant";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

export default function LiveVedio() {
  const [live, setLive] = useState([]);

  useEffect(() => {
    getAllLivevideo();
  }, [live]);
  //   const getAllLivevideo = async () => {
  //     try {
  //       return await fetch(YOUTUBE_VEDIOS_API);
  //     } catch (error) {
  //       console.log(error);
  //       return error;
  //     }
  //   };

  const getAllLivevideo = async () => {
    const data = await fetch(YOUTUBE_VEDIOS_API);
    const json = await data.json();
    console.log(json);
    setLive(json.items);
  };
  return (
    <div>
      <ButtonList />
      <div className="flex flex-wrap">
        {live.map((stream) => (
          <Link to={"/watch?v=" + live.id}>
            {" "}
            <VideoCards key={stream.id} info={stream} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
}
