import React from "react";
import * as S from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

interface Card {
  id: number;
  title: string;
  image: string;
  alt: string;
  onClick: () => void;
  FavoriteClick: () => void;
}

interface CardsProps {
  CardsItem: Card[];
}

const Cards: React.FC<CardsProps> = ({ CardsItem }) => {
  return (
    <>
      {CardsItem.map((e) => (
        <S.Box>
          <S.ButtonLike onClick={e.FavoriteClick}>{<MdFavoriteBorder style={{ height: '50px', width: '40px', color: 'red'}}/>}</S.ButtonLike>

          <button
            onClick={() => e.onClick()}
            style={{ backgroundColor: "white", border: "none" }}
          >
            <S.Container key={e.id}>
              <S.Content>
                <S.Image>
                  <img src={e.image} alt={e.alt} />
                </S.Image>
                <S.Title>{e.title}</S.Title>
              </S.Content>
            </S.Container>
          </button>
        </S.Box>
      ))}
    </>
  );
};

export default Cards;
