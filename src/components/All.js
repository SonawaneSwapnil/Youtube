import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import { YOUTUBE_VEDIOS_API } from "../utils/constant";
import VideoCards from "./VideoCards";

import { Link } from "react-router-dom";
export default function All() {
  const [allVedios, setAllVedios] = useState([]);
  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const data = await fetch(YOUTUBE_VEDIOS_API);
    const json = await data.json();
    // console.log(json.items);
    setAllVedios(json.items);
  };
  return (
    <div>
      <ButtonList />
      <div className="flex flex-wrap">
        {allVedios.map((n) => (
          <Link to={"/watch?v=" + allVedios.id}>
            <VideoCards key={n.items} info={n} />
          </Link>
        ))}
      </div>
    </div>
  );
}
