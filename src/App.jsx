import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import AccountPage from './pages/Account';

function App() {

  return (
    <BrowserRouter>
      <div className='container-md flex justify-center items-center border border-grey rounded w-50 p-5 m-5' style={{backgroundColor: "white"}}>
        <Routes>
          <Route path='/' element={< LoginPage/>}/>
          <Route path='/register' element={< RegisterPage/>} />
          <Route path='/account' element={< AccountPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
