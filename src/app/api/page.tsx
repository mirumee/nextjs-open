"use client"
import Link from "next/link";
import React from "react";

export default function Home() {
  const [clientData, setClientData] = React.useState();
  const [isrData, setIsrData] = React.useState();
  const [revalidateData, setRevalidateData] = React.useState();

  const onClientClick = (async () => {
    const { protocol, host } = window.location;
    const url = `${protocol}//${host}`;
    const response = await fetch(`${url}/api/client`);
    const data = await response.json();
    setClientData(data)
  });

  const onIsrClick = (async () => {
    const { protocol, host } = window.location;
    const url = `${protocol}//${host}`;
    const response = await fetch(`${url}/api/isr`);
    const data = await response.json();
    setIsrData(data)
  });

  const onRevalidateClick = (async () => {
    const { protocol, host } = window.location;
    const url = `${protocol}//${host}`;
    const response = await fetch(`${url}/api/revalidate-tag`);
    const data = await response.json();
    setRevalidateData(data)
  });

  return (
    <>
      <div
        onClick={onClientClick}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Client
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Call api/client
        </p>
        {JSON.stringify(clientData)}
      </div>

      <div
        onClick={onIsrClick}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          ISR
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Call /irs
        </p>
        {JSON.stringify(isrData)}
      </div>

      <div
        onClick={onRevalidateClick}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Revalidate Tag - revalidate
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          /render/revalidate-tag
        </p>
        {JSON.stringify(revalidateData)}
      </div>
    </>
  );
}
