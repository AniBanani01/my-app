
import './App.css';
function App() {
    return (
        <>
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
            <main>

                {/* <!-- home page --> */}
                <section className="home">
                    <div className="info">
                        <h1>ARE YOU HUNGRY</h1>
                        <h1>LET'S FIND SOME DELISIOUS AND EASY TO MAKE RECIPIES</h1>
                        <p>GET STARTED</p>
                        <div id="filter"></div>
                    </div>
                </section>

                <section className="categories">
                    <h2>CATEGORIES</h2>
                    <article>

                        <img src="./demo-code/bg-image.jpg" alt="" />
                        <h4>WITH UNDER 5 INGREDIENTS</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                        </p>
                        <a href="#">Read More</a>
                    </article>
                    <article>
                        <img src="./demo-code/bg-image.jpg" alt="" />
                        <h4>READY FOR 15 MINUTES</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                        </p>
                        <a href="#">Read More</a>
                    </article>
                    <article>
                        <img src="./demo-code/bg-image.jpg" alt="" />
                        <h4>YOU SHOULD TRY THIS</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                        </p>
                        <a href="#">Read More</a>
                    </article>
                </section>

                {/* <!-- Recipies Page --> */}

                {/* <!-- <div className="resipies"> --> */}
                <h2>Recipies</h2>
                <section className="recipies-colection">

                    <div className="recipie">
                        <img src="https://i.pinimg.com/474x/bb/16/7e/bb167e9ca1c4efeb5e7a3bab87dbbfab.jpg" alt="e/xample1" />
                        <div className="container">
                            <p className="title">
                                RECIPIE1
                            </p>
                            <p><strong>Ingredients:</strong><span className="ingredients">neshto</span> </p>
                            <p><strong>Level:</strong> <span className="level">beginers</span> </p>
                            <p><strong>Time to cook:</strong><span className="time">15</span>min</p>
                            <p><a className="details-btn" href="">Details</a></p>
                        </div>
                    </div>
                    <div className="recipie">
                        <img src='https://sodelicious.recipes/wp-content/uploads/2018/11/type-of-salmon-e1541579682737-720x380.jpg' alt="e/xample1" />
                        <div className="container">
                            <p className="title">
                                RECIPIE1
                            </p>
                            <p><strong>Ingredients:</strong><span className="ingredients">neshto</span> </p>
                            <p><strong>Level:</strong> <span className="level">beginers</span> </p>
                            <p><strong>Time to cook:</strong><span className="time">15</span>min</p>
                            <p><a className="details-btn" href="">Details</a></p>
                        </div>
                    </div>
                    <div className="recipie">
                        <img src="https://lexiscleankitchen.com/wp-content/uploads/2018/07/Roasted-Chicken-Veggies3.jpg" alt="e/xample1" />
                        <div className="container">
                            <p className="title">
                                RECIPIE1
                            </p>
                            <p><strong>Ingredients:</strong><span className="ingredients">neshto</span> </p>
                            <p><strong>Level:</strong> <span className="level">beginers</span> </p>
                            <p><strong>Time to cook:</strong><span className="time">15</span>min</p>
                            <p><a className="details-btn" href="">Details</a></p>
                        </div>
                    </div>
                </section>
                {/* <!-- </div> --> */}

                <h2>No recipies yet.</h2>

                {/* register */}

                <section className="register">
                    <div className="form">
                        <h2>Register</h2>
                        <form className="register-form">
                            <input
                                type="text"
                                name="email"
                                id="register-email"
                                placeholder="email"
                            />
                            <input
                                type="password"
                                name="password"
                                id="register-password"
                                placeholder="password"
                            />
                            <input
                                type="password"
                                name="re-password"
                                id="repeat-password"
                                placeholder="repeat password"
                            />
                            <button type="submit">register</button>
                            <p className="message">Already registered? <a href="#">Login</a></p>
                        </form>
                    </div>
                </section>


                {/* Login */}

                <section className="login">
                    <div className="form">
                        <h2>Login</h2>
                        <form className="login-form">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="email" />
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="password"
                            />
                            <button type="submit">login</button>
                            <p className="message">
                                Not registered? <a href="#">Create an account</a>
                            </p>
                        </form>
                    </div>
                </section>

            </main>
{/* create */}
<section className="create">
          <div className="form">
            <h2>New recipie</h2>
            <form className="create-form">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Recipie name"
              />
              <input
                type="text"
                name="imageUrl"
                id="recipie-image"
                placeholder="Recipie Image"
              />
              <input
                type="text"
                name="category"
                id="recipie-category"
                placeholder="Category"
              />
              
              <input
                type="text"
                name="ingredients"
                id="ingredients"
                placeholder="Ingredients"
              />
               <input
                type="text"
                name="time"
                id="time"
                placeholder="Preparation Time"
              />

              <textarea
                id="recipie-description"
                name="description"
                placeholder="Preparation steps"
                rows="5"
                cols="50"
              ></textarea>
              <button type="submit">Add</button>
            </form>
          </div>
        </section>

{/* details */}


            <footer>

                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Recipies</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Write us</a></li>
                        <li><a href="#">Call us</a></li>
                    </ul>
                    <ul className="space">
                        <li><a href="#">Address : Sofia, Bulgaria</a></li>
                        <li><a href="#">Email : ani_par7@abv.bg</a></li>
                        <li><a href="#">Phone : 0887696943</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Follow Us</a></li>
                        <div>
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </ul>

                </nav>
                <p>
                    Copyright © 2023. All Rights Reserved.
                </p>
            </footer>

        </>
    );
}

export default App;
