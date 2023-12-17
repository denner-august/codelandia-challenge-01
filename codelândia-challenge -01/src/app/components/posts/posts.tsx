"use client";
import { useState } from "react";
import { ImageComponent } from "@/app/tools/Image";
import heart from "@/../public/image/icon-heart.png";
import heartActive from "@/../public/image/icon-heart-active.png";

interface PostProps {
  data: string;
  title: string;
  conteudo: string;
}

export function Posts({ data, title, conteudo }: PostProps) {
  const [Favorita, UseFavorita] = useState(heart);

  function Favoritar() {
    if (Favorita === heart) {
      return UseFavorita(heartActive);
    }
    return UseFavorita(heart);
  }

  return (
    <div className=" border border-textoPrincipal w-3/4 h-auto min-h-60    pt-10 pb-10 p-5 m-10 flex flex-col justify-between">
      <div className="flex justify-between">
        <span className="text-textoPrincipal">{data}</span>
        <button onClick={() => Favoritar()}>
          <ImageComponent
            src={Favorita}
            width={32}
            height={32}
            alt="favoritar"
          />
        </button>
      </div>

      <h1>{title}</h1>

      <p className="pt-5">{conteudo}</p>
    </div>
  );
}
