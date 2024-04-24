"use client"
import Image from "next/image";

import image from "../../../../public/image/test-image.jpg";
import { CopyBlock, dracula } from 'react-code-blocks';

const IMAGE_WIDTH = [400, 300, 200, 100];
const IMAGE_HEIGTH = [400, 300, 200, 100];
const QUALIRY = [100, 80, 60, 40, 20, 0];

export default function Internal() {
  return (
    <article>
      <h1>Image Optimization</h1>
      
      <div>
      <CopyBlock text='<Image alt="pic" src={image} />' language="jsx" theme={dracula}/>
      </div>

      <Image alt="pic" src={image} />

      <CopyBlock text='<Image key={i} alt="pic" src={image} width={width} />' language="jsx" theme={dracula}/>
      Prop: width
      {IMAGE_WIDTH.map((width, i) => {
        return (
          <>
            width: {width}
            <Image key={i} alt="pic" src={image} width={width} />
          </>
        )
      })}
      <CopyBlock text='<Image key={i} alt="pic" src={image} height={height} />' language="jsx" theme={dracula}/>
      Prop: height
      {IMAGE_HEIGTH.map((height, i) => {
        return (
          <>
            height: {height}
            <Image key={i} alt="pic" src={image} height={height} />
          </>
        )
      })}
      <CopyBlock text='<Image key={i} alt="pic" src={image} quality={quality} />' language="jsx" theme={dracula}/>

      Prop: quality
      {QUALIRY.map((quality, i) => {
        return (
          <>
            Quality: {quality}
            <Image key={i} alt="pic" src={image} quality={quality} />
          </>
        )
      })}
    </article>
  );
}