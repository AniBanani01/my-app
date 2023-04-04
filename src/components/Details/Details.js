import { useEffect, useState, useReducer } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { recipieServiceFactory } from '../../services/recipieService';
import * as commentService from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';

import { RecipieComment } from './RecipieComment/RecipieComment';
import { recipieReducer } from '../../reducers/recipieReducer';
import { useRecipieContext } from '../../contexts/RecipieContext';
import { LikeButton } from './RcecipieLikes/RecipieLikes'

export const Details=()=>{
    const { recipieId } = useParams();
    const { userId, isAuthenticated, userEmail } = useAuthContext();
    const { deleteRecipie } = useRecipieContext();
    const [recipie, dispatch] = useReducer(recipieReducer, {});
    const recipieService = useService(recipieServiceFactory)
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            recipieService.getOne(recipieId),
            commentService.getAll(recipieId),
        ]).then(([recipieData, comments]) => {
            const recipieState = {
                ...recipieData,
                comments,
            };
            
            dispatch({type: 'RECIPIE_FETCH', payload: recipieState})
        });
    }, [recipieId]);
  

    // add coments
    const onCommentSubmit = async (values) => {
        const response = await commentService.create(recipieId, values.comment);

        dispatch({
            type: 'COMMENT_ADD',
            payload: response,
            userEmail,
        });
    };

    const isOwner = recipie._ownerId === userId;

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${recipie.title}`);

        if (result) {
            await recipieService.delete(recipie._id);

            deleteRecipie(recipie._id);

            navigate('/recipies');
        }
    };


return(
         
        <section className="recipie-details">
        <h1>Recipie Details</h1>
        <div className="info-section">

            <div className="recipie-header">
                <img className="recipie-img" src={recipie.imageUrl} alt={recipie.title}/>
                <div >
                    <h1 className="recipie">{recipie.title}</h1>
                    <p className="category">{recipie.category}</p>
                    <p className="level">{recipie.level}</p>
                    <p className="cooking-time">{recipie.time}</p>
                </div>
                <div>
                    <h1>INGREDIENTS</h1>
                    <ul>
                        {recipie.ingredients &&( (recipie.ingredients).split(",")).map(i=>(
                            <li key={i}>
                                {i}
                            </li>
                        ))}
                     
                    </ul>
                </div>
            </div>
                    {isOwner && (
                            <div className="buttons">
                                {/* <Link to={`/recipies/${recipie._id}/edit`} className="button">Edit</Link> */}
                                <button className="button">Edit</button>
                                <button className="button" onClick={onDeleteClick}>Delete</button>
                            </div>
                        )}

            <p className="text">{recipie.text}</p>

            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                        {recipie.comments && recipie.comments.map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.author.email}: {x.comment}</p>
                            </li>
                        ))}
                    </ul>
                    {!recipie.comments?.length && (
                        <p className="no-comment">No comments.</p>
                    )}
            </div>

            {isAuthenticated && <RecipieComment onCommentSubmit={onCommentSubmit} />   }

        {/* <div><LikeButton/></div> */}
        </div>

    </section>
    )
}