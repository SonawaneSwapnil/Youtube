import React from "react";

export default function Button({ name }) {
  return (
    <div>
      <div className="px-5  py-2 m-2 bg-black-200 rounded-lg ">{name}</div>
    </div>
  );
}
