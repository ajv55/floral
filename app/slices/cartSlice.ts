// store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number; // Adding quantity to manage locally in frontend
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
  isCartOpen: boolean; // Ensure isCartOpen is defined as boolean
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  isCartOpen: false, // Initialize isCartOpen as false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const { id, name, price, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity by 1 when adding the same item again
      } else {
        state.items.push({ id, name, price, quantity: 1 }); // Initialize quantity as 1 when adding a new item
      }
      state.totalAmount += price; // Add price to totalAmount
    },
    removeItem(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      if (itemIndex > -1) {
        const { price, quantity } = state.items[itemIndex];
        state.totalAmount -= price * quantity; // Decrease totalAmount when removing item
        state.items.splice(itemIndex, 1);
      }
    },
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        state.totalAmount += (quantity - existingItem.quantity) * existingItem.price; // Adjust totalAmount based on quantity change
        existingItem.quantity = quantity; // Update quantity
      }
    },
    setIsCartOpen(state, action: PayloadAction<boolean>) {
      state.isCartOpen = action.payload;
    },
    resetCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, setIsCartOpen, resetCart } = cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectTotalAmount = (state: RootState) => state.cart.totalAmount;

export default cartSlice.reducer;

