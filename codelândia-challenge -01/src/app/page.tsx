"use client";
import Header_layout from "./components/header/header_component/header_layout";

import { SearchBar } from "./components/header/search_component/search";
import { Title } from "./components/header/title_component/title";
import { PostContainer } from "./components/posts/postContainer";
import { ListaPosts } from "./tools/listaPosts";

export default function Home() {
  return (
    <>
      <Header_layout>
        <Title />
        <SearchBar />
      </Header_layout>

      <PostContainer>
        <ListaPosts />
      </PostContainer>
    </>
  );
}
