export type CartItem = {
    id: string;
    image: string;
    name: string;
    price: number;
    qty:number;
  }

  export interface CartReducerInitialState {
    loading?: boolean;
    cartitems: CartItem[];
    subtotal: number;
    tax: number;
    shippingCharges: number;
    discount?: number;
    total: number;
  }