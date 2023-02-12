import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Login from "./Login";
import Register from "./Register";

import { loadUser } from './actions/userActions';
import store from './store';

function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
