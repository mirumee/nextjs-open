import Image from "next/image";

import testImage from "../../../../public/image/test-image.jpg";

export default function Page() {
  return (
    <article>
      <h1>Image Optimization</h1>
      <h2>Original size</h2>
      <Image alt="pic" src={testImage} />
    </article>
  );
}