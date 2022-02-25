import React from "react"
import { useSelector } from "react-redux";
import Loader from "../../assets/Loader/Loader";
import BookCard from "../BookCard/BookCard";

const BookList = () => {

    const loader = useSelector( state => state.app.loader )
    const books = useSelector( state => state.books.books )

    return (
        <div>
            { loader && <Loader />}
            <h1>Found XXX results</h1>
            { books && books.length > 0
                ? books.map((item) => {
                    return (
                        // <div>{item.volumeInfo.title}</div>
                        <BookCard key={item.id} 
                                  title={item.volumeInfo.title}
                                  image={item.volumeInfo.imageLinks.smallThumbnail} />
                    )
                })
                : <div > <h3>list is empty</h3></div>}
        </div>
    )
}

export default BookList;