import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { RecipieProvider } from './contexts/RecipieContext';

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
import {Logout} from './components/Logout/Logout'


function App() {

    return (

        <AuthProvider>
            <RecipieProvider>
                <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create-recipie' element={<Create />} />
                        <Route path='/recipies' element={<Recipies />} />
                        <Route path='/recipies/:recipieId' element={<Details />} />
                    </Routes>
                </main>

                <Footer />
            </RecipieProvider>
        </AuthProvider>
    );
}

export default App;
