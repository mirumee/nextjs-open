import Image from "next/image";

const TEST_IMAGE = "https://www.nyc.gov/assets/wildlifenyc/images/content/iStock-916650566.jpg";

const IMAGE_WIDTH = [400, 300, 200, 100];
const IMAGE_HEIGTH = [400, 300, 200, 100];
const QUALIRY = [100, 80, 60, 40, 20, 0];

export default function External() {
  return (
    <article>
      <h1>Image Optimization</h1>
      <Image alt="pic" src={TEST_IMAGE} width={500} height={352}/>
      Props: width & height
      {IMAGE_WIDTH.map((width, i) => {
        const height = IMAGE_HEIGTH[i];
        return (
          <>
            <p>width: {width}</p>
            <p>height: {height}</p>
            <Image key={width} alt="pic" src={TEST_IMAGE} width={width} height={height} />
          </>
        )
      })}
      Props: quality
      {QUALIRY.map((quality) => {
        return (
          <>
            <p>quality: {quality}</p>
            <Image key={quality} alt="pic" src={TEST_IMAGE} quality={quality} height={400} width={400} />
          </>
        )
      })}
    </article>
  );
}