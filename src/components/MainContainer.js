import React from "react";
import ButtonList from "./ButtonList";
import Videocontainer from "./Videocontainer";

export default function MainContainer() {
  return (
    <div className="col-span-11">
      <ButtonList />
      <Videocontainer />
    </div>
  );
}
