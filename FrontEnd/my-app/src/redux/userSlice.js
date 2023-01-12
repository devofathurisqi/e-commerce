import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: {
        id: null,
        username: "",
    }
}

export const userSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        login: (state, action) => {
            state.value.id = null
            state.value.username = ""
        },
        logout: (state) => {
            state.value.id = null;
            state.value.username = ""
        }
    }
})

export const {login, logout} = userSlice.actions