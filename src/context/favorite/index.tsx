import React, { createContext, useState } from "react";

interface Product {
  id: number;
  quantity: number;
}

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartContext {
  favorite: any;
  addProducToCart: any;
  removeProductToCart: any;
  clearCart: () => void;
}

export const FavoriteProvider = createContext<CartContext | undefined>(
  undefined
);

export default function CartProvider({ children }: CartProviderProps) {
  const [favorite, setFavorite] = useState<Product[]>([]);

  function addProducToCart(id: number) {
    const copyFavorite = [...favorite];
    const item = copyFavorite.find((product) => product.id === id);

    if (!item) {
      copyFavorite.push({ id: id, quantity: 1 });
    } else {
      item.quantity = item.quantity + 1;
    }

    setFavorite(copyFavorite);
  }

  function removeProductToCart(id: any) {
    const copyFavorite = [...favorite];
    const index = copyFavorite.findIndex((product: any) => product.id.id === id.id.id);
  
    if (index !== -1) {
      const item = copyFavorite[index];
      if (item.quantity > 1) {
        item.quantity = item.quantity - 1;
      } else {
        copyFavorite.splice(index, 1);
      }
      setFavorite(copyFavorite);
    }

  }

  function clearCart() {
    setFavorite([]);
  }

  const cartContextValue: CartContext = {
    favorite,
    addProducToCart,
    removeProductToCart,
    clearCart,
  };

  return (
    <FavoriteProvider.Provider value={cartContextValue}>
      {children}
    </FavoriteProvider.Provider>
  );
}
