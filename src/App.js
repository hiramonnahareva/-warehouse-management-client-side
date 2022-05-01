import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Common/Header/Header';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import Inventory from './Pages/Inventory/Inventory';
import RequireAuth from './RequireAuth/RequireAuth';
import New from './Pages/New';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <New></New>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={ 
        <RequireAuth>
         <Inventory></Inventory>
        </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
