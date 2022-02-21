import axios from "axios"
import { useDispatch } from "react-redux"
import { booksAPI } from "./../API/api"
import { hideLoader, showLoader } from "./appReducer"

const SET_BOOKS = "SET_BOOKS"
// const ADD_TODO = "ADD_TODO"
// const DELETE_TODO = 'DELETE_TODO'
// const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
// const SET_SELECTED_ITEM = "SET_SELECTED_ITEM"
// const EDIT_TODO = "EDIT_TODO"


const defaultState = {
     books: [],
    // currentPage: 1,
    // selectedItem: {}
    
}

export default function booksReducer(state = defaultState, action) {
    //debugger
    switch (action.type)    {
        case SET_BOOKS: return {...state, books: action.payload}
        // case DELETE_TODO: return {...state, todos: [...state.todos.filter(todo => todo.id !== action.payload)]}
        // case SET_CURRENT_PAGE: return {...state, currentPage: action.payload}
        // case SET_SELECTED_ITEM: return {...state, selectedItem: action.payload}
        // case ADD_TODO: return {...state, todos: [action.payload, ...state.todos ]}
        // case EDIT_TODO: return {...state, todos: [...state.todos.map(todo => todo.id === action.payload.id  
        //                                                             ?   { ...todo,   
        //                                                                 title: action.payload.title !== "" ? action.payload.title : todo.title,
        //                                                                 completed: action.payload.completed !== "" ? action.payload.completed : todo.completed
        //                                                                 }
        //                                                             : todo
        //                                                             )
        //                                                     ]}    
        default:
            return state
    }
}

export const setBooks = (books) => ({type: SET_BOOKS, payload: books})



// export const addNewTodo = (newTodo) => ({type: ADD_TODO, payload: newTodo})
// export const deleteTodo = (id) => ({type: DELETE_TODO, payload: id})
// export const setCurrentPage = (p) => ({type: SET_CURRENT_PAGE, payload: p })
// export const setSelectedItem = (obj) => ({type: SET_SELECTED_ITEM, payload: obj})
// export const editTodo = (obj) => ({type: EDIT_TODO, payload: obj})


export const getBooksThunkCreator = ({ ...form}) => {
    //debugger
    return async (dispatch) => {     
        try {   
            dispatch(showLoader())
            const response = await booksAPI.getBooks({ ...form})
            // const response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=books")
            //const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
            dispatch (setBooks (response.items));
            //console.log("from thunk:", response.items)
            dispatch(hideLoader())  
        } catch (e) {
            alert(e.response.data)
        }  
    }}    

   