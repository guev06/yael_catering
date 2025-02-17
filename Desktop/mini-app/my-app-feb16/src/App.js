import logo from './logo.svg';
import './App.css';
import List from './components/List';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddMovie from './components/AddMovie';
import SearchForMovie from './components/SearchForMovie';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='list' element={<List/>}/>
      <Route path='add-movie' element={<AddMovie/>}/>
      <Route path='search' element={<SearchForMovie/>}></Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}



export default App;
