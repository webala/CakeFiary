/** @format */

export type Flavour = {
   _id?: number;
   name: string;
};

export type AddOn = {
   _id?: number;
   name: string;
   price: number;
};

export type Cake = {
   _id?: number;
   name: string;
   flavours: Flavour[];
   availableAddons: AddOn[];
};
