"use client"
import React from "react";

export default function SSR() {
  const [time, setTime] = React.useState<string>("");
  React.useEffect(() => {
    setTime(new Date().toISOString());
  }, [])


  return (
    <div>
      <h1>Time: {time}</h1>
    </div>
  );
}