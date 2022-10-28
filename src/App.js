import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import User from './pages/user/User';
import Adduser from './pages/user/Adduser';
import Edit from './pages/user/Edit';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-user' element={<Adduser />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/users/:id' element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
