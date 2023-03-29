export const Create=()=>{
    return(
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
                <input
                    type="text"
                    name="level"
                    id="level"
                    placeholder="Level"
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
    )
}