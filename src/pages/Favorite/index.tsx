import React from "react";
import Cards from "../../components/Cards";
import useFavorite from "../../hooks/useFavorite";
import { Layout } from "../../layout";
import * as S from '../Home/styles'

export default function Favoritos() {
  const { favorite, removeProductToCart } = useFavorite();

    const handleFavoriteClick = (anime: any) => {
    removeProductToCart(anime);
  };

  return (
    <S.Container>
      <Layout />

      <Cards
        CardsItem={favorite.map((anime:any) => ({
          id: anime.id.id,
          title: anime.id.attributes.canonicalTitle,
          image: anime.id.attributes.posterImage.medium,
          alt: anime.id.type,
          FavoriteClick: () => handleFavoriteClick(anime),
  
        }))}
      />
    </S.Container>
  );
}