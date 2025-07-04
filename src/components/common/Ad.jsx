import React from "react";

function Ad({ url }) {
  return (
    <div className="w-full px-16 cursor-pointer">
      <img src={url} alt="Ad image" />
    </div>
  );
}

export default Ad;
