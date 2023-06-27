import React, { createContext, useEffect, useState } from "react";
import { api } from "../../services/api"; 

interface Anime {
  id: number;
  title: string;
}

interface SearchContextData {
  info: any; 
  setInfo: React.Dispatch<React.SetStateAction<any>>; 
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
  const [info, setInfo] = useState<any>({});
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