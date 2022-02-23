import { createSlice } from "@reduxjs/toolkit";

const Items =
    localStorage.getItem("CartItem") !== null ?
    JSON.parse(localStorage.getItem("CartItem")) :
    [];

const initialState = { value: Items };
export const cartItem = createSlice({
    name: "CartItem",
    initialState,
    reducers: {
        addCart: (state, action) => {
            // const newItemCart = action.payload
            // state.push(newItemCart)

            const newItemcart = action.payload;
            const duplipcate = findItem(state.value, newItemcart);

            if (duplipcate.length > 0) {
                state.value = delItem(state.value, newItemcart);

                state.value = [
                    ...state.value,
                    {
                        ...newItemcart,
                        id: duplipcate[0].id,
                        quantity: newItemcart.quantity + duplipcate[0].quantity,
                    },
                ];
            } else {
                state.value = [
                    ...state.value,
                    {
                        ...newItemcart,
                        id: state.value.length > 0 ?
                            state.value[state.value.length - 1].id + 1 :
                            1,
                    },
                ];
            }
            localStorage.setItem(
                "CartItem",
                JSON.stringify(sortItem(state.value))
            );
        },

        updateCart: (state, action) => {
            const itemupdate = action.payload;

            const item = findItem(state.value, itemupdate);

            if (item.length > 0) {
                state.value = delItem(state.value, itemupdate);
                state.value = [
                    ...state.value,
                    {
                        ...itemupdate,
                        id: item[0].id,
                    },
                ];
            }
            localStorage.setItem(
                "CartItem",
                JSON.stringify(sortItem(state.value))
            );
        },
        removeCart: (state, action) => {
            const item = action.payload;
            state.value = delItem(state.value, item);
            localStorage.setItem(
                "CartItem",
                JSON.stringify(sortItem(state.value))
            );
        },
    },
});

const findItem = (arr, item) =>
    arr.filter(
        (e) =>
        e.slug === item.slug &&
        e.color === item.color &&
        e.size === item.size
    );
const delItem = (arr, item) =>
    arr.filter(
        (e) =>
        e.slug !== item.slug ||
        e.color !== item.color ||
        e.size !== item.size
    );

const sortItem = (arr) =>
    arr.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

export const { addCart, updateCart, removeCart } = cartItem.actions;
export default cartItem.reducer;