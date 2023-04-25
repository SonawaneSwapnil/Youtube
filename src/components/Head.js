import React, { useState, useEffect } from "react";
import { toggleMenu } from "../utils/allSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

export default function Head() {
  // const [darkTheme, setDarkTheme] = useState("light");

  // useEffect(() => {
  //   if (darkTheme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.add("light");
  //   }
  // });
  const [suggestion, setSuggestion] = useState([]);

  const [searchQuery, setsearchQuery] = useState("");
  // console.log(searchQuery);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => getAllsearch(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getAllsearch = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestion(json[1]);
  };
  return (
    <div className="grid grid-flow-col p-2 m- shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer bg-white rounded-lg"
          src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
          alt=""
        />
        <a href="/">
          <img
            className="h-8 ml-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1024px-YouTube_Logo_%282013-2017%29.svg.png"
            alt=""
          />
        </a>
      </div>
      <div className="col-span-10 text-center">
        <input
          value={searchQuery}
          type="text"
          name=""
          className=" w-1/2 p-2 border border-gray-400 text-black rounded-l-full"
          onChange={(e) => {
            setsearchQuery(e.target.value);
          }}
        />{" "}
        <button
          type=""
          className="ml border border-gray-400 p-2  rounded-r-full"
        >
          🔍
        </button>
        <div className="fixed bg-black  w-[37rem]">
          <ul>
            {suggestion.map((s) => (
              <li key={s} className="py-2 shadow-lg cursor-pointer hover: ">
                🔍 {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU"
          alt=""
        />
      </div>
      <div>
        {/* <button
          type=""
          className=" bg-green-300 rounded-2xl p-3 text-white"
        ></button> */}
      </div>
    </div>
  );
}
