async function getTime() {
  return new Date().toISOString();
}

export const revalidate = 10;

export default async function ISR() {
  const time = getTime();
  return (
    <>
      <h1>export const revalidate = 10;</h1>
      <div>Time: {time}</div>
    </>
  )
}