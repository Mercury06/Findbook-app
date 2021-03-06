import React, { useState } from "react";
import { getBooksThunkCreator } from "../../reducers/booksReducer";
import "./SearchForm.css"
//import axios from "axios";
import { useDispatch } from "react-redux";

const SearchForm= () => {

    const[form, setForm] = useState({ searchValue: "", category: "", sorting: ""  })   

    const dispatch = useDispatch(); 
   
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
        console.log("form:", form)
    }

    return (
        
            <div>
                <div className="searchWrapper">
                    
                    <input name="searchValue" 
                           type="text" 
                           placeholder="Search book..."
                           onChange={changeHandler} />
                     {/* <button className="authorization__btn" onClick={() => registration({...form}, setResponse)}>Submit</button>
                 */}
                    <button onClick={() => dispatch(getBooksThunkCreator({...form}))}>Find</button>
                    {/* <button onClick={() => fetchBooks()}>Find</button> */}
                </div>
                <div className="selectorsWrapper">
                    <select name="category" title="Category" onChange={changeHandler} > 
                        <option value="all">all</option>
                        <option value="art">ART</option>
                        <option value="biography">BIOGRAPHY</option>                        
                        <option value="computers">COMPUTERS</option>
                        <option value="history">HISTORY</option>
                        <option value="medical">MEDICAL</option>
                        <option value="poetry">POETRY</option>

                        {/* <option value="business">BUSINESS</option>
                        <option value="comics">COMICS</option>
                        <option value="cooking">COOKING</option>
                        <option value="fiction">FICTION</option>
                        <option value="gardening">GARDENING</option>
                        <option value="health">HEALTH AND FITNESS</option> */}                        
                        {/* <option value="nature">NATURE</option>                        
                        <option value="science">SCIENCE</option> */}
                    </select>
                    
                    <select name="sorting" title="Sort by" onChange={changeHandler} >
                        <option value="relevance" selected >relevance</option>
                        <option value="newest">newest</option>
                    </select>
                </div>
            </div>
    );
};

// export default reduxForm({form: "searchForm"})(SearchForm);
export default SearchForm;