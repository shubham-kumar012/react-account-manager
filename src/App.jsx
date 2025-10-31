import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import AccountPage from './pages/Account';

function App() {

  return (
    <BrowserRouter>
      <div className='container d-flex justify-content-center align-items-center min-vh-100 w-100 py-4' >
        <div className="w-100 p-4 p-md-5 rounded shadow-sm"
          style={{
            width: "100%",
            maxWidth: "480px",
            backgroundColor: "white",
            margin: "0 auto",
          }}>
          <Routes>
            {/* <---- Redirect route '/' -> '/login' ---->*/}
            <Route path='/' element={<Navigate to='/login' replace />} />

            {/* <---- Main routes ----> */}
            <Route path='/login' element={< LoginPage />} />
            <Route path='/register' element={< RegisterPage />} />
            <Route path='/account' element={< AccountPage />} />

            {/* <---- redirect to login page when undefined routes ----> */}
            <Route path='*' element={<Navigate to='/login' replace />} />

          </Routes>
        </div>
      </div>

      {/* <---- when width shrink less than 550 then login adjustment ----> */}
      <style>
        {`
      @media (max-width: 550px) {
        .container > div {
          max-width: 90vw !important;
        }
      }
    `}
      </style>
    </BrowserRouter>
  )
}



export default App
