import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Admin from './pages/Admin';
import Categories from './pages/Categories';
import Homepage from './pages/Homepage';
import NewProduct from './pages/NewProduct';
import './App.css'; 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/categories" element={<Categories/>}/>
        <Route path="/admin/newproduct" element={<NewProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
