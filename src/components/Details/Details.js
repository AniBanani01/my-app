export const Details=()=>{
    return(
         
        <section className="recipie-details">
        <h1>Recipie Details</h1>
        <div className="info-section">

            <div className="recipie-header">
                <img className="recipie-img" src="https://i.pinimg.com/474x/bb/16/7e/bb167e9ca1c4efeb5e7a3bab87dbbfab.jpg" />
                <div >
                    <h1>Recipie name</h1>
                    <p className="category">Under 5 ingredients</p>
                    <p className="level">For beginers</p>
                    <p className="cooking-time">15 min</p>
                </div>
                <div>
                    <h1>INGREDIENTS</h1>
                    <ul>
                        <li>Eggs</li>
                        <li>Black pepper</li>
                        <li>Garlic</li>
                        <li>Pene</li>
                    </ul>
                </div>
            </div>
            <div className="buttons">
                <button className="button">Edit</button>
                <button className="button">Delete</button>
            </div>

            <p className="text">ksknjkdfskdjnskjgfsnsgfnfgfjkgfkfgjgjfkgsnkjksjsgkangfjnkjfnfkfdkanjakvfnjj</p>

            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    <li className="comment">
                        <p>Username: comment</p>
                    </li>
                </ul>
                <article className="create-comment">
                    <h2>Add new comment:</h2>
                    <form className="form" >
                        <textarea name="comment"
                            placeholder="Comment......"
                        ></textarea>
                        <input
                            className="btn submit"
                            type="submit"
                            value="Add Comment" />
                    </form>
                </article>
            </div>



        </div>

    </section>
    )
}