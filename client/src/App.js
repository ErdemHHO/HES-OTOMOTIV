import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Admin from './pages/admin/Admin';
import Categories from './pages/admin/Categories';
import Homepage from './pages/user/Homepage';
import NewProduct from './pages/admin/NewProduct';
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
