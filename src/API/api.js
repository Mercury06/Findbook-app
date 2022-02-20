import * as axios from 'axios';

const baseURL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyA8JLmBQwXIGt7weISGuoMI9QuDUVtZBLQ';
    

const params = {
    key: API_KEY
}   


//return axios.get ( baseURL+`character?page=${currentPage}`)

export const booksAPI = {
    
    getBooks ( searchValue, categories ) {
        
        return axios.get ( baseURL + `?q=${searchValue}${categories !== "all" ? `+ subject:${categories}` : ""}`, {params})
        .then (response => {
            return response
        });
    },

    


}





