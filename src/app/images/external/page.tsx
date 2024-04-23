import Image from "next/image";

const TEST_IMAGE = "https://labs.jensimmons.com/2016/examples/images/testscreen-large.jpg";

const IMAGE_WIDTH = [400, 300, 200, 100];
const IMAGE_HEIGTH = [400, 300, 200, 100];
const QUALIRY = [100, 80, 60, 40, 20, 0];

export default function Page() {
  return (
    <article>
      <h1>Image Optimization - fill</h1>
      <hr />
      <Image alt="pic" src={TEST_IMAGE} fill/>
      <hr />
      <h1>Image fill</h1>
      <hr />
      Image width x Image height:
      {IMAGE_WIDTH.map((width, i) => {
        const height = IMAGE_HEIGTH[i];
        return (
          <>
            width: {width}
            height: {height}
            <Image key={width} alt="pic" src={TEST_IMAGE} width={width} height={height}/>
          </>
        )
      })}
      Image quality:
      {QUALIRY.map((quality) => {
        return (
          <>
            Quality: {quality}
            <Image key={quality} alt="pic" src={TEST_IMAGE} quality={quality} height={400} width={400}/>
          </>
        )
      })}
    </article>
  );
}