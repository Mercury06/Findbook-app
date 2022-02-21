
import './App.css';
import BookList from './Components/BookList/BookList';
import Header from './Components/Header/Header';
import HeaderSearch from './Components/Header/HeaderSearch';

function App() {
  return (
    
      
    <div className="app">
      <Header />
      <HeaderSearch />
        <div className="wrap">     
          <BookList />
        </div>
    </div>
  );
}

export default App;
