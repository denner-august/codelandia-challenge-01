import PostsCriados from "@/../post.json";
import { Posts } from "../components/posts/posts";
import { useEffect, useState } from "react";

interface postCriadoProps {
  data: string;
  title: string;
  conteudo: string;
}
[];

export function ListaPosts() {
  const [PostsSearch, UsePostsSearch] = useState(PostsCriados.PostsCriados);

  useEffect(() => {
    function buscaPosts() {
      const p = PostsCriados.PostsCriados.filter((posts) => posts);

      UsePostsSearch(p);
    }

    buscaPosts();
  }, []);

  return PostsSearch.map(({ data, title, conteudo }: postCriadoProps) => {
    return <Posts key={data} data={data} title={title} conteudo={conteudo} />;
  });
}
