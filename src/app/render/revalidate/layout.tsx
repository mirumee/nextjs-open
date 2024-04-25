import { unstable_cache } from "next/cache";
import type { ReactNode } from "react";

export default async function Page({ children }: { children: ReactNode }) {
  const fakeFetch = unstable_cache(
    async () => new Date().getTime(),
    ["fakeFetch"],
    {
      tags: ["revalidate"],
    },
  );
  const fetchedDate = await fakeFetch();
  return (
    <div>
      <div>Fetched time: {new Date(fetchedDate).toISOString()}</div>
    </div>
  );
}