import React from "react";
import "./BookCard.css";
import {NavLink} from "react-router-dom";


const BookCard = ({title, authors, categories, image, id}) => {
    return (
        <div className="container">
            <NavLink to={`/books/${id}`}>
            <div className="imageWrapper">
                <img src={image } alt="" />
            </div>
            </NavLink>
           
            <NavLink className="title" to={`/books/${id}`}>
                {title}
            </NavLink>
            
        </div>
    );
};

export default BookCard;
