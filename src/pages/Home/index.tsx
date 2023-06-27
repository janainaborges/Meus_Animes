import { Layout } from "../../layout";
import Cards from "../../components/Cards";
import Modal from "../../components/Modal";
import useSearch from "../../hooks/useSearch";
import * as S from "./styles";
import { useState } from "react";
import useFavorite from "../../hooks/useFavorite";


export default function Home() {
  const { info, text } = useSearch();
  const { addProducToCart } = useFavorite();
  const [open, setOpen] = useState(false);
  const [capture, setCapture] = useState<any>(null); 

  const handleCardClick = (anime: any) => {
    setCapture(anime);
    setOpen(true);
  };

  const handleFavoriteClick = (anime: any) => {
    addProducToCart(anime);
    alert("Item adicionado aos favoritos!");

  };

  return (
    <S.Container>
      <Layout />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {text && !info.data && <span>Carregando...</span>}
        {info.data && info.data.length > 0 && (
          <Cards
            CardsItem={info.data.map((anime: any) => ({
              id: anime.id,
              title: anime.attributes.canonicalTitle,
              image: anime.attributes.posterImage.medium,
              alt: anime.type,
              onClick: () => handleCardClick(anime),
              FavoriteClick: () => handleFavoriteClick(anime),
            }))}
          />
        )}
        {open && capture && (
          <Modal
            open={open}
            setOpen={() => setOpen(false)}
            title={capture.attributes.canonicalTitle}
            image={capture.attributes.posterImage.medium}
          />
        )}
      </div>
    </S.Container>
  );
}