"use client";
import { ReactNode, useState } from "react";

export default function Layout({
  slotA,
  slotB,
  children,
}: {
  children: ReactNode;
  slotA: ReactNode;
  slotB: ReactNode;
}) {
  const [routeA, setRouteA] = useState(false);
  const [routeB, setRouteB] = useState(false);

  return (
    <div>
      <div className="flex flex-col mb-10">
        <label htmlFor="a">
          Enable slotA
          <input
            name="a"
            type="checkbox"
            checked={routeA}
            onChange={(e) => {
              setRouteA(e.target.checked);
            }}
          />
        </label>
        <label htmlFor="b">
          Enable slotB
          <input
            name="b"
            type="checkbox"
            checked={routeB}
            onChange={(e) => {
              setRouteB(e.target.checked);
            }}
          />
        </label>
      </div>

      {routeA && slotA}
      {routeB && slotB}
      {/* {children} */}
    </div>
  );
}