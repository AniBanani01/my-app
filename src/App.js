import { Routes, Route } from 'react-router-dom'


import './reset.css'
import './App.css';

import { Create } from './components/Create/Create';
import { Details } from './components/Details/Details';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Recipies } from './components/Recipies/Recipies';
import { Register } from './components/Register/Register';


function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    {/* <Route path='/logout' element={<Logout />} /> */}
                    <Route path='/register' element={<Register />} />
                    <Route path='/create-recipie' element={<Create />} />
                    <Route path='/recipies' element={<Recipies />} />
                    <Route path='/recipies/:recipieID' element={<Details />} />
                </Routes>
            </main>

            <Footer />

        </>
    );
}

export default App;
