import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

async function wait(n: number = 1000) {
  return new Promise((res) => {
    setTimeout(res, n);
  });
}

export async function GET(request: NextRequest) {
  const resStream = new TransformStream();
  const writer = resStream.writable.getWriter();

  const res = new Response(resStream.readable, {
    headers: {
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
      "Cache-Control": "no-cache, no-transform",
    },
  });

  setTimeout(async () => {
    writer.write(
      `data: ${JSON.stringify({
        message: "open",
        time: new Date().toISOString(),
      })}\n\n`,
    );
    for (let i = 1; i <= 4; i++) {
      await wait(2000);
      writer.write(
        `data: ${JSON.stringify({
          message: "hello:" + i,
          time: new Date().toISOString(),
        })}\n\n`,
      );
    }

    await wait(2000);
    writer.write(
      `data: ${JSON.stringify({
        message: "close",
        time: new Date().toISOString(),
      })}\n\n`,
    );
    await wait(5000);
    await writer.close();
  }, 100);

  return res;
}