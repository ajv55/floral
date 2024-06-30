// store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
  isCartOpen?: boolean
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  isCartOpen: false
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const { id, name, price, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, name, price, quantity });
      }
      state.totalAmount += price * quantity;
    },
    removeItem(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      if (itemIndex > -1) {
        state.totalAmount -= state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    setIsCartOpen: (state, action) => {
        state.isCartOpen = action.payload
    }
  },
});

export const { addItem, removeItem, setIsCartOpen } = cartSlice.actions;
export const selectCartItems = (state: RootState) => state?.cart?.items;
export const selectTotalAmount = (state: RootState) => state?.cart?.totalAmount;

export default cartSlice.reducer;
