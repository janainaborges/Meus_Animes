import { useContext } from "react";
import { FavoriteProvider } from "../context/favorite";

export default function useFavorite() {
  const favoriteContext = useContext(FavoriteProvider);
  const { favorite, addProducToCart, removeProductToCart, clearCart } = favoriteContext || {};
  return { favorite, addProducToCart, removeProductToCart, clearCart };
}