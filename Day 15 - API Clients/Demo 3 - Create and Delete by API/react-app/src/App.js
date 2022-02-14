import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/User';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<User />} />
        <Route exact path={'/user/add'} element={<UserDetail />} />
        <Route exact path={`/user/:userId`} element={<UserDetail />} />
        <Route exact path={`/user/:userId`} element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
