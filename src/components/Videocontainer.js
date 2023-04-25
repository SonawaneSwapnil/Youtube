import React, { useEffect, useState } from "react";
import { YOUTUBE_VEDIOS_API } from "../utils/constant";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

export default function Videocontainer() {
  const [vedios, setVedios] = useState([]);
  useEffect(() => {
    getAllVedios();
  }, []);

  // const getAllVedios = async () => {
  //   try {
  //     const response = await fetch(YOUTUBE_VEDIOS_API);
  //     const data = await response.json();
  //     // console.log(data.items);
  //     setVedios(data.items);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getAllVedios = async () => {
    const data = await fetch(YOUTUBE_VEDIOS_API);
    const json = await data.json();
    console.log(json);
    setVedios(json.items);
  };
  return (
    <div className="flex flex-wrap ">
      {vedios?.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCards key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
}
