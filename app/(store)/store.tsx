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
  removeItemFromCart: (product: Product, productIndex: number) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
}

const useCart = create<State & Actions>()((set, get) => ({
  cart: [],
  product: {},
  totalPrice: 0,
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
      const currentPrice = get().totalPrice;
      const priceOfProduct = (product.cost / 100) * product.quantity;
      const updatedPrice = currentPrice + priceOfProduct;
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
          totalPrice: updatedPrice,
        };
      } else {
        const updatedCart = [...state.cart, product];
        return {
          ...state,
          cart: updatedCart,
          totalPrice: updatedPrice,
        };
      }
    });
  },
  removeItemFromCart: (product, productIndex) => {
    set((state) => {
      const currentPrice = get().totalPrice;
      const priceOfProduct = (product.cost / 100) * product.quantity;
      const updatedPrice = currentPrice - priceOfProduct;
      const updatedCart = state.cart.filter((element, elementIndex) => {
        return elementIndex !== productIndex;
      });
      return {
        ...state,
        cart: updatedCart,
        totalPrice: updatedPrice,
      };
    });
  },
  increaseQuantity: (product) => {
    set((state) => {
      const currentPrice = get().totalPrice;
      const priceOfProduct = product.cost / 100;
      const updatedPrice = currentPrice + priceOfProduct;
      const cart = [...state.cart];
      const updatedCart = cart.map((item) =>
        item.price_id === product.price_id
          ? { ...item, quantity: (item.quantity as number) + 1 }
          : item
      );
      return {
        cart: updatedCart,
        totalPrice: updatedPrice,
      };
    });
  },
  decreaseQuantity: (product) => {
    set((state) => {
      const currentPrice = get().totalPrice;
      const priceOfProduct = product.cost / 100;
      const updatedPrice =
        product.quantity > 1 ? currentPrice - priceOfProduct : currentPrice;
      const cart = [...state.cart];
      const updatedCart = cart.map((item) =>
        item.price_id === product.price_id && product.quantity > 1
          ? { ...item, quantity: (item.quantity as number) - 1 }
          : item
      );
      return {
        cart: updatedCart,
        totalPrice: updatedPrice,
      };
    });
  },
}));

export default useCart;
