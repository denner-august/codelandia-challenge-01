import icone from "@/../public/image/icon-search.png";
import { ImageComponent } from "@/app/tools/Image";
import { usePesquisa } from "@/app/context/ContextZustand";

export function SearchBar() {
  const pesquisa = usePesquisa((state) => state.pesquisa);
  const escrevePesquisa = usePesquisa((state) => state.escrevePesquisa);

  return (
    <div>
      <form className="flex items-center">
        <div className="relative mt-12 w-[65vw]">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
            <ImageComponent
              src={icone}
              height={32}
              width={32}
              alt="icone de pesquisa"
            />
          </div>
          <input
            value={pesquisa}
            onChange={(input) => escrevePesquisa(input.target.value)}
            type="text"
            id="simple-search"
            className="text-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="Pesquise por um post"
            required
          />
        </div>
      </form>
    </div>
  );
}
