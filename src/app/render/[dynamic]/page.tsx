export default function Page({ params }: { params: { dynamic: string } }) {
  return <div>My Post: {params.dynamic}</div>
}