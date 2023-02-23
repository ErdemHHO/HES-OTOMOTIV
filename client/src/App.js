import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Admin from './pages/Admin';
import Categories from './pages/Categories';
import NewProduct from './pages/NewProduct';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/categories" element={<Categories/>}/>
        <Route path="/admin/newproduct" element={<NewProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
