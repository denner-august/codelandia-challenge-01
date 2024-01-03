import { PostsCriados } from "../../../post";
import { Posts } from "../components/posts/posts";
import { useEffect, useState } from "react";
import { usePesquisa } from "@/app/context/ContextZustand";

interface postCriadoProps {
  data: string;
  title: string;
  conteudo: string;
}
[];

export function ListaPosts() {
  const pesquisa = usePesquisa((state) => state.pesquisa);

  const [PostsSearch, UsePostsSearch] = useState(PostsCriados.PostsCriados);

  useEffect(() => {
    function buscaPosts() {
      const p = PostsCriados.PostsCriados.filter((posts) =>
        posts.title.includes(pesquisa)
      );

      UsePostsSearch(p);
    }

    buscaPosts();
  }, [pesquisa]);

  return PostsSearch.map(({ data, title, conteudo }: postCriadoProps) => {
    return <Posts key={data} data={data} title={title} conteudo={conteudo} />;
  });
}
