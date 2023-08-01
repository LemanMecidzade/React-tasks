import {useState} from 'react';
import './App.css'
import LoginPage from './pages/Login-Page/Login-Page'
import HomePage from './pages/Home-Page/Home-Page'

function App() {

  const [isLoggedIn,changeIsLoggedIn] = useState(false);

  const handleLogin = () =>{
    changeIsLoggedIn(true);
  }
  return (
    <div>
      {isLoggedIn ? <HomePage /> : <LoginPage handleLoginApp={handleLogin}/>}
    </div>
  );
};

export default App;
