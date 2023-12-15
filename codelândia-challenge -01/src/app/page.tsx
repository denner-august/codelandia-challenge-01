import Header_layout from "./components/header/header_component/header_layout";

import { SearchBar } from "./components/header/search_component/search";

export default function Home() {
  return (
    <>
      <Header_layout>
        <h1 className="text-4xl">
          <span className="text-textoPrincipal">Code</span>lândia
        </h1>

        <SearchBar />
      </Header_layout>
    </>
  );
}
