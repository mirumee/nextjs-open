import Image from "next/image";

import testImage from "../../../../public/image/test-image.jpg";

const IMAGE_WIDTH = [400, 300, 200, 100];
const IMAGE_HEIGTH = [400, 300, 200, 100];
const QUALIRY = [100, 80, 60, 40, 20, 0];

export default function Page() {
  return (
    <article>
      <h1>Image Optimization</h1>
      <hr />
      <Image alt="pic" src={testImage} />
      <hr />
      <h1>Image fill</h1>
      <hr />
      Image width:
      {IMAGE_WIDTH.map((width) => {
        return (
          <>
            width: {width}
            <Image key={width} alt="pic" src={testImage} width={width} />
          </>
        )
      })}
      Image height:
      {IMAGE_HEIGTH.map((height) => {
        return (
          <>
            height: {height}
            <Image key={height} alt="pic" src={testImage} height={height} />
          </>
        )
      })}
      Image quality:
      {QUALIRY.map((quality) => {
        return (
          <>
            Quality: {quality}
            <Image key={quality} alt="pic" src={testImage} quality={quality} />
          </>
        )
      })}
    </article>
  );
}