import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Common/Header/Header';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
