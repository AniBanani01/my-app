import styles from './Header.module.css'

export const Header=()=>{
    return(

        <header>
        <nav>
            <ul>
                <li className="menu-item home"><a href="#home">Home</a></li>
                <li className="menu-item catalog"><a href="#catalog">Recipies</a></li>
                <li className="menu-item about"><a href="#about">About us</a></li>
                <li className="menu-item contacts"><a href="#contacts">Contacts</a></li>
            </ul>


            <ul>
                <p>Welcome User</p>
                <li className="menu-item details"><a href="#login">Login</a></li>
                <li className="menu-item details"><a href="#register">Register</a></li>
                <li className="menu-item details"><a href="#logout">Logout</a></li>
            </ul>
        </nav>


    </header>
    );
};