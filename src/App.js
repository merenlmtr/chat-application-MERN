import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Login from "./Login";
import Register from "./Register";

import { loadUser } from './actions/userActions';
import store from './store';
import { useSelector } from 'react-redux';


function App() {

  const { isAuthenticated } = useSelector(state => state.auth)

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={isAuthenticated ? <Dashboard /> : <Login />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
