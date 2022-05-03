import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Common/Header/Header';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import Inventory from './Pages/Inventory/Inventory';
import RequireAuth from './RequireAuth/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import AddItem from './Pages/AddItem/AddItem';
import ManageItem from './ManageItem/ManageItem';
import Footer from './Pages/Common/Footer/Footer';
import NotFound from './Pages/Common/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={ 
        <RequireAuth>
         <Inventory></Inventory>
        </RequireAuth>
        }></Route>
        <Route path='/abbNew' element={ 
        <RequireAuth>
         <AddItem></AddItem>
        </RequireAuth>
        }></Route>
        <Route path='/items/:_id' element={ 
        <RequireAuth>
         <ManageItem></ManageItem>
        </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
