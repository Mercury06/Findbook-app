
import { useStore } from 'react-redux';
import './App.css';
import BookList from './Components/BookList/BookList';
import Header from './Components/Header/Header';
import HeaderSearch from './Components/Header/HeaderSearch';

function App() {

  const store = useStore()
  console.log("from store:", store.getState())

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
