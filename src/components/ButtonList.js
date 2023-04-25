import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function ButtonList() {
  return (
    <div className=" mx-3 flex ">
      <div className="hover:bg-sky-500 rounded-lg w-1/6">
        <Link to="/all">
          <Button name="All " />
        </Link>
      </div>
      <div className="hover:bg-sky-500 rounded-lg w-1/6">
        <Link to="/gaming">
          {" "}
          <Button name="Gaming" />
        </Link>
      </div>
      <div className="hover:bg-sky-500 rounded-lg w-1/6">
        <Link to="/songs">
          {" "}
          <Button name="Songs" />
        </Link>
      </div>
      <div className="hover:bg-sky-500 rounded-lg w-1/6">
        <Link to="/live">
          {" "}
          <Button name="Live" />
        </Link>
      </div>
      <div className="hover:bg-sky-500 rounded-lg w-1/6">
        <Link to="/soccer">
          {" "}
          <Button name="Soccer" />
        </Link>
      </div>

      <div className="hover:bg-sky-500 rounded-lg w-1/6">
        <Link to="/cricket ">
          {" "}
          <Button name="Cricekt" />
        </Link>
      </div>
      <div className="hover:bg-sky-500 rounded-lg w-1/6">
        <Link to="/cooking">
          {" "}
          <Button name="Cooking" />
        </Link>
      </div>
      <div className="hover:bg-sky-500 rounded-lg w-1/6">
        <Link to="/news">
          {" "}
          <Button name="News" />
        </Link>
      </div>
    </div>
  );
}
