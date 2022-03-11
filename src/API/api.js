import * as axios from 'axios';

const baseURL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyA8JLmBQwXIGt7weISGuoMI9QuDUVtZBLQ';
    

const params = {
    key: API_KEY
}   

export const booksAPI = {
    
    getBooks ( {searchValue, category} ) {
        //debugger
        return axios.get ( baseURL + `?q=${searchValue}${category !== "all" ? `+ subject:${category}` : ""}`, {params})
        // return axios.get ("https://www.googleapis.com/books/v1/volumes"+`?q=${searchValue}`)        
        .then (response => response.data)
            
            //return response
    }
       


}





