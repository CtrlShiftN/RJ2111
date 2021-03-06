import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import User from './components/User';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
