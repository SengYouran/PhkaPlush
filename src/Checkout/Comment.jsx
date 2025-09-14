import React from "react";

function Comment() {
  return (
    <div>
        <h2 className="text-xl font-medium mt-2 ">Note</h2>
      <textarea
        className="border border-pink-600 w-full h-20 outline-0 p-2 rounded"
        name="comment"
        id="comment"
        placeholder="Note"
      ></textarea>
    </div>
  );
}

export default Comment;
