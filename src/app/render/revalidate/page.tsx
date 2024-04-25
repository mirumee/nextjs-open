async function getTime() {
  return new Date().toISOString();
}

export default async function Revalidate() {
  const time = getTime();
  return <div>Time: {time}</div>;
}