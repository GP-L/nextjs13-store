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
  removeItemFromCart: (product: Product) => void;
  emptyCart: () => void;
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
  setProduct: (product: Product) => {
    set((state) => {
      return {
        ...state,
        product: product,
      };
    });
  },
  addItemToCart: (product: Product) => {
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
  removeItemFromCart: (params) => {
    const { itemIndex } = params;
    set((state) => {
      const newCart = state.cart.filter((element, elementIndex) => {
        return elementIndex !== itemIndex;
      });
      return {
        ...state,
        cart: newCart,
      };
    });
  },
  emptyCart: () => {
    set((state) => {
      const newCart: Product[] = [];
      return {
        ...state,
        cart: newCart,
      };
    });
  },
}));

export default useCart;
