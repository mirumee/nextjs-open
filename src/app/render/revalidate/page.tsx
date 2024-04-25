import React from "react";

async function getTime() {
  return new Date().toISOString();
}

export default function Revalidate() {
  const time = getTime();
  return (
    <div>
      <div>Time: {time}</div>
    </div>
  );
}