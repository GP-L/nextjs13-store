import Stripe from "stripe";
import { create } from "zustand";

interface Product {
  price_id: string;
  name: string;
  description: string;
  cost: number | null;
  quantity?: number;
  productInfo: string | Stripe.Product | Stripe.DeletedProduct;
}

interface State {
  cart: Product[];
  product: Product;
  totalPrice: number;
  openModal: boolean;
}

interface Actions {
  setOpenModal: () => void;
  setProduct: (product: Product) => void;
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (productIndex: number) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
}

const useCart = create<State & Actions>()((set, get) => ({
  cart: [],
  product: {},
  openModal: false,
  setOpenModal: () => {
    set((state) => {
      return {
        ...state,
        openModal: !state.openModal,
      };
    });
  },
  setProduct: (product) => {
    set((state) => {
      return {
        ...state,
        product: product,
      };
    });
  },
  addItemToCart: (product) => {
    set((state) => {
      const cart = [...state.cart];
      const productInCart = cart.find(
        (item) => item.price_id === product.price_id
      );
      if (productInCart) {
        const updatedCart = cart.map((item) =>
          item.price_id === product.price_id
            ? { ...item, quantity: (item.quantity as number) + 1 }
            : item
        );
        return {
          cart: updatedCart,
        };
      } else {
        const updatedCart = [...state.cart, product];
        return {
          ...state,
          cart: updatedCart,
        };
      }
    });
  },
  removeItemFromCart: (productIndex) => {
    set((state) => {
      const updatedCart = state.cart.filter((element, elementIndex) => {
        return elementIndex !== productIndex;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    });
  },
  increaseQuantity: (product) => {
    set((state) => {
      const cart = [...state.cart];
      const updatedCart = cart.map((item) =>
        item.price_id === product.price_id
          ? { ...item, quantity: (item.quantity as number) + 1 }
          : item
      );
      return {
        cart: updatedCart,
      };
    });
  },
  decreaseQuantity: (product) => {
    set((state) => {
      const cart = [...state.cart];
      const updatedCart = cart.map((item) =>
        item.price_id === product.price_id && product.quantity > 1
          ? { ...item, quantity: (item.quantity as number) - 1 }
          : item
      );
      return {
        cart: updatedCart,
      };
    });
  },
}));

export default useCart;
