/** @format */

export type Flavour = {
   _id?: string;
   name: string;
};

export type AddOn = {
   _id?: string;
   name: string;
   price: number;
};

export type Cake = {
   _id?: string;
   name: string;
   flavours: Flavour[];
   availableAddons: AddOn[];
   cakeImage?: string;
   price: number;
};

export type CartItem = {
   id: string;
   cake: Cake;
   addOns: AddOn[];
};

export type Cart = {
   cartItems: CartItem[];
};

export type Order = {
   _id?: string;
   orderItems: CartItem[];
   booked: boolean;
   complete: boolean;
   delivery: boolean;
};

export type GlobalState = {
   cart: Cart;
};
