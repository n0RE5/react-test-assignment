import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { API_KEY, FETCH_BOOKS_LIMIT } from "../../utils/consts";
import { IBookResponse } from "../../types/books";
import axios from "axios";

export const fetchBooks = createAsyncThunk<any, void, {state: RootState}>('books/fetchBooks', async (_, { getState, rejectWithValue }) => {
    try {
        const { searchQuery, sortType, category } = getState().searchReducer
        const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}${category !== 'all' ? `+subject:${category}` : ''}&orderBy=${sortType}&maxResults=${FETCH_BOOKS_LIMIT}&key=${API_KEY}`
        const response = await axios.get<IBookResponse>(url)
        if (!response.data.totalItems) {
            return rejectWithValue('Nothing were found for your query')
        }
        return response.data
    } catch (e) {
        console.log(e)
        return rejectWithValue('Error occured while loading books')
    }   
})

export const fetchPaginationBooks = createAsyncThunk<any, void, {state: RootState}>('books/fetchPaginationBooks', async (_, { getState, rejectWithValue }) => {
    try {
        const { searchQuery, sortType, category } = getState().searchReducer
        const { currentPage } = getState().booksReducer
        const fetchStartIndex = currentPage * FETCH_BOOKS_LIMIT
        const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}${category !== 'all' ? `+subject:${category}` : ''}&orderBy=${sortType}&startIndex=${fetchStartIndex}&maxResults=${FETCH_BOOKS_LIMIT}&key=${API_KEY}`
        const response = await axios.get<IBookResponse>(url)
        return response.data.items
    } catch (e) {
        console.log(e)
        return rejectWithValue('Error occured while loading books')
    } 
}) 