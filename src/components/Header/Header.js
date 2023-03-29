import styles from './Header.module.css'

import { Link } from 'react-router-dom';

export const Header=()=>{
    return(

        <header>
        <nav>
            <div>
              <Link to="/">Home</Link>
               <Link to="/recipies">Recipies</Link>
               <Link to="/about">About us</Link>
               <Link to="/contacts">Contacts</Link>
            </div>

            <div>
               <Link to="/login">Login</Link>
               <Link to="/register">Register</Link>
            </div>

            <div>
                <p>Welcome User</p>
               <Link to="/create-recipie">Create recipie</Link>
               <Link to="/logout">Logout</Link>
            </div>
        </nav>


    </header>
    );
};