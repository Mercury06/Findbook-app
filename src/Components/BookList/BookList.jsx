import React from "react"
import { useSelector } from "react-redux";
import Loader from "../../assets/Loader/Loader";

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
                        <div>{item.volumeInfo.title}</div>
                    )
                })
                : <div > <h3>list is empty</h3></div>}
        </div>
    )
}

export default BookList;