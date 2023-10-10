import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchBooks, fetchPaginationBooks } from "../actions/books"
import { FETCH_BOOKS_LIMIT } from "../../utils/consts"
import { IBook, IBookResponse } from "../../types/books"

interface BooksState {
    currentPage: number,
    totalPages: number,
    totalBooks: number,
    data: IBook[]
    isLoading: boolean
    error: string
}

const initialState: BooksState = {
    currentPage: 0,
    totalPages: 0,
    totalBooks: 0,
    data: [],
    isLoading: false,
    error: ''
}

const booksReducer = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchBooks.pending, (state, action) => {
            state.isLoading = true
            state.currentPage = 0
            state.totalPages = 0
            state.totalBooks = 0
            state.data = []
        })
        .addCase(fetchBooks.rejected, (state, action) => {
            state.error = action.payload as string
            state.isLoading = false
            state.data = []
            state.currentPage = 0
            state.totalPages = 0
            state.totalBooks = 0
        })
        .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<IBookResponse>) => {
            state.isLoading = false
            state.error = ''
            state.data = action.payload.items
            state.totalPages = Math.ceil(action.payload.totalItems / FETCH_BOOKS_LIMIT) 
            state.currentPage = 1
            state.totalBooks = action.payload.totalItems
        })
        .addCase(fetchPaginationBooks.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchPaginationBooks.rejected, (state, action) => {
            state.error = action.payload as string
            state.isLoading = false
        })
        .addCase(fetchPaginationBooks.fulfilled, (state, action: PayloadAction<IBook[]>) => {
            state.isLoading = false
            state.error = ''
            state.data = [...state.data, ...action.payload]
            state.currentPage = state.currentPage + 1
        })
    }
})

export default booksReducer.reducer