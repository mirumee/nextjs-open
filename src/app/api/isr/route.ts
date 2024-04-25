import fs from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export const dynamic = "force-dynamic";


export async function GET(request: NextRequest) {
  const cwd = process.cwd();
  // const prerenderManifest = await fs.readFile(
  //   path.join(cwd, ".next/prerender-manifest.json"),
  //   "utf-8",
  // );
  // const manifest = JSON.parse(prerenderManifest);
  // const previewId = manifest.preview.previewModeId;


  // x-prerender-revalidate is a custom header that tells the prerendering service to revalidate the page after the specified number of seconds
  console.log(`https://${request.headers.get("host")}/render/isr`)
  
  const result = await fetch(`http://${request.headers.get("host")}/render/isr`, {
    headers: { "x-prerender-revalidate": "10" },
    method: "HEAD",
  });

  return NextResponse.json({
    status: 200,
    body: {
      result: result.ok,
      cacheControl: result.headers.get("cache-control"),
    },
  });
}