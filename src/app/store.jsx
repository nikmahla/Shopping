"use client"
import { create } from 'zustand'

const useStore = create((set, get) => ({

  basket: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('basket')) || [] : [],
  addProductToBasket: (product) => set((state) => {
    console.log('Adding product to basket:', product);
    const existingProduct = state.basket.find((item) => item.id === product.id);
    const updatedBasket = existingProduct
      ? state.basket.map((item) =>
        item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
      : [...state.basket, { ...product, quantity: 1 }];

    localStorage.setItem('basket', JSON.stringify(updatedBasket));
    return { basket: updatedBasket };
  }),
  plusFromCart: (productId) => set((state) => {
    console.log('Attempting to increase quantity for product:', productId);
    const updatedBasket = state.basket.map((item) =>
      item.id === productId ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
    console.log('Updated basket:', updatedBasket);
    return { basket: updatedBasket };
  }),
  minusFromCart: (productId) => set((state) => {
    console.log('Attempting to decrease quantity for product:', productId);
    const updatedBasket = state.basket.map((item) =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
    return { basket: updatedBasket };
  }),

  removeFromBasket: (productId) => set((state) => {
    const updatedBasket = state.basket.filter((item) => item.id !== productId);
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
    return { basket: updatedBasket };
  }),

  getBasket: () => get().basket,

  favorites: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('favorites')) || [] : [],
  
  addToFavorites: (product) => set((state) => {
    const updatedFavorites = [...state.favorites, product];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    return { favorites: updatedFavorites };
  }),

  removeFromFavorites: (productId) => set((state) => {
    const updatedFavorites = state.favorites.filter((item) => item.id !== productId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    return { favorites: updatedFavorites };
  }),

  getFavorites: () => get().favorites,
}))

export default useStore