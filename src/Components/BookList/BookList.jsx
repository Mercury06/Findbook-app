import React from "react"
import { useSelector } from "react-redux";
import Loader from "../../assets/Loader/Loader";

const BookList = () => {

    const loader = useSelector( state => state.app.loader )

    return (
        <div>
            { loader && <Loader />}
            <h1>Found XXX results</h1>
            <h3>Booklist</h3>
        </div>
    )
}

export default BookList;