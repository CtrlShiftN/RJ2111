import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/User';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/users/add' element={<UserDetail />} />
          <Route path='/users/:userId' element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
