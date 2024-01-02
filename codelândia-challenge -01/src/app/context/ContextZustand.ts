import { create } from "zustand";

interface usePesquisaTypes {
  pesquisa: string;
  escrevePesquisa: (s: string) => void;
}

export const usePesquisa = create<usePesquisaTypes>()((set) => ({
  pesquisa: "",
  escrevePesquisa: (s) => set(() => ({ pesquisa: s }))
}));
