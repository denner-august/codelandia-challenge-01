import Imagem, { StaticImageData } from "next/image";

interface ImageProps {
  src: StaticImageData;
  height: number;
  width: number;
  alt: string;
}

export function ImageComponent({ src, height, width, alt }: ImageProps) {
  return <Imagem src={src} height={height} width={width} alt={`${alt}`} />;
}
