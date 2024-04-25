"use client";
import { useCallback, useState, useTransition } from "react";

import type { Song as SongType } from "../../actions";
import { getSong } from "../../actions";


export default function Client() {
  const [isPending, startTransition] = useTransition();
  const [song, setSong] = useState<SongType>();

  const onClick = useCallback(() => {
    startTransition(async () => {
      const song = await getSong(
        "Hold Me In Your Arms",
        "I'm never gonna give you up",
      );
      setSong(song);
    });
  }, []);

  return (
    <div>
      <button onClick={onClick}>Fire Server Actions</button>
      {isPending && <div>Render Server Actions...</div>}
      <p>{song?.artist}</p>
    </div>
  );
}