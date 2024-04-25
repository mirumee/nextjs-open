import Link from "next/link";

export default function SlotB() {
  return (
    <div className="border p-4">
      <h1>Parallel Route B</h1>
      <Link href="/parallel/a-page">Go to a-page</Link>
    </div>
  );
}