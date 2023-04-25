import React from "react";

export default function Chatmessages({ name, message }) {
  return (
    <div className="flext flex items-center p-2">
      {" "}
      <img
        className="h-8"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU"
        alt=""
      />
      <p className="font-bold px-2">{name}</p>
      <p>{message}</p>
    </div>
  );
}
