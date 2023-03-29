export const Home = () => {
    return (
        <>
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

            {/* <img src="./demo-code/bg-image.jpg" alt="" /> */}
            <h4>WITH UNDER 5 INGREDIENTS</h4>
            {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
            </p> */}
            <a href="#">Read More</a>
        </article>
        <article>
            {/* <img src="./demo-code/bg-image.jpg" alt="" /> */}
            <h4>READY FOR 15 MINUTES</h4>
            {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
            </p> */}
            <a href="#">Read More</a>
        </article>
        <article>
            {/* <img src="./demo-code/bg-image.jpg" alt="" /> */}
            <h4>YOU SHOULD TRY THIS</h4>
            {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
            </p> */}
            <a href="#">Read More</a>
        </article>
    </section>
    </>
    );
}