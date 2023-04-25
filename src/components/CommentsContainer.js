import React from "react";
const commentsData = [
  {
    name: "swapnil sonawane",
    text: "loreem ipsum dolOR SIT DCVF FGDXSZCF",
    replies: [],
  },
  {
    name: "swapnil sonawane",
    text: "loreem ipsum dolOR SIT DCVF FGDXSZCF",
    replies: [
      {
        name: "swapnil sonawane",
        text: "loreem ipsum dolOR SIT DCVF FGDXSZCF",
        replies: [
          {
            name: "swapnil sonawane",
            text: "loreem ipsum dolOR SIT DCVF FGDXSZCF",
            replies: [
              {
                name: "swapnil sonawane",
                text: "loreem ipsum dolOR SIT DCVF FGDXSZCF",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "swapnil sonawane",
    text: "loreem ipsum dolOR SIT DCVF FGDXSZCF",
    replies: [
      {
        name: "swapnil sonawane",
        text: "loreem ipsum dolOR SIT DCVF FGDXSZCF",
        replies: [
          {
            name: "swapnil sonawane",
            text: "loreem ipsum dolOR SIT DCVF FGDXSZCF",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "swapnil sonawane",
    text: "loreem ipsum dolOR SIT DCVF FGDXSZCF",
    replies: [
      {
        name: "swapnil sonawane",
        text: "loreem ipsum dolOR SIT DCVF FGDXSZCF",
        replies: [],
      },
    ],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="shadow-lg bg-gray-200 p-2 flex mx-2 my-3">
      <img
        className="w-8 h-8 mx-2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU"
        alt=""
      />
      <p className="font-bold mx-2"> {name}</p>
      <div>{text}</div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
export default function CommentsContainer() {
  return (
    <div>
      <div className="m-5 p-2">
        <h1 className="font-bold text-2xl">Comments</h1>
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
}
