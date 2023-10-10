import { Navigate } from "react-router-dom";
import { IRoute } from "./types/globals";
import MainPage from "./pages/MainPage";
import BookPage from "./pages/BookPage";
import ErrorPage from "./pages/ErrorPage";
import { BOOK_ROUTE, DEFAULT_ROUTE, ERROR_ROUTE } from "./utils/consts";

export const routes: IRoute[] = [
    {
        path: DEFAULT_ROUTE,
        element: <MainPage />
    },
    {
        path: BOOK_ROUTE + '/:id',
        element: <BookPage />
    },
    {
        path: ERROR_ROUTE,
        element: <ErrorPage />
    },
    {
        path: '*',
        element: <Navigate to={ERROR_ROUTE} replace/>
    }
]