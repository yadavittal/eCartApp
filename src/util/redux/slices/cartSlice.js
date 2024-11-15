import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name :"cart",
    initialState: {
        items :[]
    },
    reducers : {
        addItem: (state,action) => {
            
            state.items.push(action.payload)
            console.log(action.payload);
            // console.log(state.items);
            
        },
        deleteItem: (state,action) => {
        //    console.log(action, action.payload);
           const itemIdToDelete = action.payload;
           const index = state.items.findIndex(item => item.id === itemIdToDelete);
           if (index !== -1) {
            state.items.splice(index, 1); // Remove 1 item at the found index
           }
        //    const itemId = action.payload;
        //    state.items = state.items.filter((item)=> item.id !== itemId)
        },
    }
})
export const {addItem,deleteItem} = cartSlice.actions;
export default cartSlice.reducer;