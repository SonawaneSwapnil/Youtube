import React, { useEffect, useState } from "react";
import Chatmessages from "./Chatmessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/Chatslice";

import generate, { makeMessage } from "../utils/Helper";

export default function Livechat() {
  const [liveMessage, setLivemessage] = useState();
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("polling");
      dispatch(
        addMessage({
          name: generate(),
          message: makeMessage(30),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  });
  return (
    <div>
      <div className=" w-full ml-2 h-[600px] p-2 border flex flex-col-reverse border-black bg-gray-100 overflow-y-scroll text-black">
        {chatMessages.map((chat, index) => (
          <Chatmessages key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <div className="flex">
        <form
          className="mx-2 mt- w-full p-2 ml-2 border-black"
          onSubmit={(e) => {
            e.preventDefault();

            dispatch(
              addMessage({
                name: "swapnil sonawnae",
                message: liveMessage,
              })
            );
            setLivemessage("");
          }}
        >
          <input
            type="text"
            name=""
            value={liveMessage}
            className="mx-2 w-75 h-6 rounded-sm mt-1 p-3 border border-black text-black"
            onChange={(e) => {
              setLivemessage(e.target.value);
            }}
          />
          <button
            type=""
            className="border border-black bg-green-500 rounded-lg p-3"
          >
            Send chat
          </button>
        </form>
      </div>
    </div>
  );
}
