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
                <Home />
                <Recipies />
                <Register />
                <Login />
                <Create/>
                <Details/>
            </main>
          
          <Footer/>

        </>
    );
}

export default App;
