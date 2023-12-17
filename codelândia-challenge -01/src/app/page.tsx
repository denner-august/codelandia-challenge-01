import Header_layout from "./components/header/header_component/header_layout";

import { SearchBar } from "./components/header/search_component/search";
import { Title } from "./components/header/title_component/title";
import { PostContainer } from "./components/posts/postContainer";
import { Posts } from "./components/posts/posts";

export default function Home() {
  return (
    <>
      <Header_layout>
        <Title />
        <SearchBar />
      </Header_layout>

      <PostContainer>
        <Posts
          data="17 de ago, 2024"
          title="O que é linguagem de programação? Conheça as principais"
          conteudo="Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando."
        />

        <Posts
          data="12 de jul, 2024"
          title="GitHub agora permite fazer login sem precisar de senha"
          conteudo="O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores."
        />

        <Posts
          data="21 de jun, 2024"
          title="Por que os hiperlinks são azuis em sua maioria?"
          conteudo="Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor."
        />
      </PostContainer>
    </>
  );
}
