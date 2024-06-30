import { createSlice } from "@reduxjs/toolkit";

interface OrderState {
    isOrderModalOpen?: boolean, 
}

const initialState: OrderState = {
    isOrderModalOpen: false
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers:{
        setIsOrderModalOpen: (state, action) => {
            state.isOrderModalOpen = action.payload
        }
    }
})

export const {setIsOrderModalOpen} = orderSlice.actions;

export default orderSlice.reducer