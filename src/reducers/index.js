import {applyMiddleware, combineReducers, createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import appReducer from "./appReducer"
import booksReducer from "./booksReducer"

const rootReducer = combineReducers({
    app: appReducer,
    books: booksReducer
    
})

export const store = createStore (rootReducer, composeWithDevTools(applyMiddleware(thunk)))