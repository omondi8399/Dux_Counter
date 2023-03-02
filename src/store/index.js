import { createSlice, configureStore} from '@reduxjs/toolkit'



const initialAuthState = {
    isAuthenticated
}

createSlice({
    name: 'authentication',
    initialState:
})

const store = configureStore({
    reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions

export default store