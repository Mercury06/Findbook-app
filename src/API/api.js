import * as axios from 'axios';

const baseURL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyA8JLmBQwXIGt7weISGuoMI9QuDUVtZBLQ';
    

const params = {
    key: API_KEY
}   

export const booksAPI = {
    
    getBooks ( {searchValue, category} ) {
        //debugger
        const response = axios.get ( baseURL + `?q=${searchValue}${category !== "all" ? `+ subject:${category}` : ""}`, {params})
        //const response = axios.get ("https://www.googleapis.com/books/v1/volumes"+`?q=${searchValue}`)      
        const data = response.data
        console.log("data:",data)
        return data
    } 

}





