import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface SearchState {
    searchQuery: string
    category: string
    sortType: string
}

const initialState: SearchState = {
    searchQuery: '',
    category: '',
    sortType: ''
}

const searchReducer = createSlice({
    name: 'searchReducer',
    initialState,
    reducers: {
        setSearchParams(state, action: PayloadAction<SearchState>) {
            state.category = action.payload.category
            state.searchQuery = action.payload.searchQuery
            state.sortType = action.payload.sortType
        }
    }
})

export default searchReducer.reducer
export const { setSearchParams } = searchReducer.actions