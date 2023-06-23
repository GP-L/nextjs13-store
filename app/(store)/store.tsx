import Stripe from "stripe";
import { create } from "zustand";

interface Product {
  name: any;
  description: any;
  price_id: string;
  cost: number | null;
  productInfo: string | Stripe.Product | Stripe.DeletedProduct;
}

interface Params {
  newProduct: Product;
  newItem: Product;
  itemIndex: number;
}

interface CartState {
  cart: Product[];
  product: Product;
  openModal: Boolean;
  setOpenModal: () => void;
  setProduct: (params: Params) => void;
  addItemToCart: (params: Params) => void;
  removeItemFromCart: (params: Params) => void;
  emptyCart: () => void;
}

const useCart = create<CartState>()((set, get) => ({
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
  setProduct: (params) => {
    const { newProduct } = params;
    set((state) => {
      return {
        ...state,
        product: newProduct,
      };
    });
  },
  addItemToCart: (params) => {
    const { newItem } = params;
    set((state) => {
      const newCart = [...state.cart, newItem];
      return {
        ...state,
        cart: newCart,
      };
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
