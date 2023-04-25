import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //erly return

  if (!isMenuOpen) return null;

  return (
    <div>
      <div className="p-5 shadow-lg w-48">
        <ul>
          <Link to="/">
            {" "}
            <li>🏠Home</li>
          </Link>

          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
        <h1 className="font-bold mt-3">Subscriptions</h1>

        <ul>
          <li>🎼Music</li>
          <li>⚽Sports</li>
          <li>🎮Gaming</li>
          <li>🎞Movies</li>
        </ul>
        <h1 className="font-bold pt-5">Watch Later</h1>
        <ul>
          <li>
            <span>🎼</span> Music
          </li>
          <li>⚽Sports</li>
          <li>🎮Gaming</li>
          <li>🎞Movies</li>
        </ul>
      </div>
    </div>
  );
}
