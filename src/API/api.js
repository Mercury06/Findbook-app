import * as axios from 'axios';

const baseURL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyA8JLmBQwXIGt7weISGuoMI9QuDUVtZBLQ';
    

const params = {
    key: API_KEY
}   


//return axios.get ( baseURL+`character?page=${currentPage}`)

export const booksAPI = {
    
    getBooks ( {searchValue, category} ) {
        //debugger
        return axios.get ( baseURL + `?q=${searchValue}${category !== "all" ? `+ subject:${category}` : ""}`, {params})
        // return axios.get ("https://www.googleapis.com/books/v1/volumes"+`?q=${searchValue}`)
        // return axios.get ( "https://www.googleapis.com/books/v1/volumes?q=subject:books")
        //return axios.get ( "https://jsonplaceholder.typicode.com/todos" )
        .then (response => response.data)
            
            //return response
    }
       


}





