import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});


const initialAuthState = {
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    }
});

/* 
configureStore creates a store basically
the important part is when we don't use toolkit, we have 1 State and 1 createStore that 
takes 1 reducer function. However, with toolkit we have different state "slices" like
counterSlice, we put all these slices into reducer with syntax like
reducer: {counter: counterSlice.reducer} and it creates us 1 reducer function for store
with merged slices
*/
const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

