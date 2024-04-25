"use client"
import Link from "next/link";
import React from "react";

export default function Middleware() {
  const [geoData, setGeoData] = React.useState();
  const [middlewareData, setMiddlewareData] = React.useState();

  const onGeoClick = (async () => {
    const { protocol, host } = window.location;
    const url = `${protocol}//${host}`;
    const response = await fetch(`${url}/middleware/geo`);
    const data = await response.json();
    setGeoData(data)
  });

  const onMiddlewareClick = (async () => {
    const { protocol, host } = window.location;
    const url = `${protocol}//${host}`;
    const response = await fetch(`${url}/api/middleware`);
    const data = await response.json();
    setMiddlewareData(data)
  });

  return (
    <>
      <div
        onClick={onGeoClick}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Geo
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Test geo middleware
        </p>
        {JSON.stringify(geoData)}
      </div>

      <Link
        href="/middleware/redirect"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Redirect
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          /middleware/redirect -&gt; /middleware/redirect-destination
        </p>
      </Link>

      <Link
        href="/middleware/rewrite"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Rewrite
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          /middleware/rewrite -&gt; /middleware/rewrite-destination
        </p>
      </Link>

      <Link
        href="/middleware/cookie"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Cookie
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          return
        </p>
      </Link>

      <div
        onClick={onMiddlewareClick}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Call /middleware/api
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Test middleware api
        </p>
        {JSON.stringify(middlewareData)}
      </div>
    </>
  );
}
