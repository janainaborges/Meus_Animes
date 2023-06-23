import React, { createContext, useEffect, useState } from "react";
import { api } from "../../services/api"; 

interface Anime {
  // Defina a interface para o tipo de dados do anime
  // De acordo com a estrutura retornada pela API
  // Exemplo:
  id: number;
  title: string;
  // ... outras propriedades do anime
}

interface SearchContextData {
  info: any; // Altere o tipo any para o tipo apropriado (ex: Anime[])
  setInfo: React.Dispatch<React.SetStateAction<any>>; // Altere o tipo any para o tipo apropriado (ex: React.Dispatch<React.SetStateAction<Anime[]>>)
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextData>({
  info: {},
  setInfo: () => {},
  text: "",
  setText: () => {},
});

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [info, setInfo] = useState<any>({}); // Altere o tipo any para o tipo apropriado (ex: Anime[])
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (text) {
        try {
          const result = await api.get<Anime[]>(
            `anime?filter[text]=${text}&page[limit]=12`
          );
          setInfo(result.data);
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          const result = await api.get<Anime[]>(`anime`);
          setInfo(result.data);
        } catch (e) {
          console.log(e);
        }
      }
    };
    fetchData();
  }, [text]);

  const searchContextValue: SearchContextData = {
    info,
    setInfo,
    text,
    setText,
  };

  return (
    <SearchContext.Provider value={searchContextValue}>
      {children}
    </SearchContext.Provider>
  );
}