import { useContext } from 'react';
import Ideas from '../../Contexts/Ideas';

function Line({ idea }) {

    const { setDeleteData} = useContext(Ideas);

    return (
        <li className="list-group-item">
            <div className="line">
                <div className="line__content">
                    <div className="line__content__info">
                        {idea.image ? <div className='img-bin'>
                            <img src={idea.image} alt={idea.title}>
                            </img>
                        </div> : <span className="red-image">No image</span>}
                    </div>
                    <div className="line__content__title">
                        {idea.title}
                    </div>

                    <div className="line__content__info">
                        {idea.idea}
                    </div>
                    <div className="line__content__title">
                        {'Goal: '+ idea.goal + '€'}
                    </div>
                    <div className="line__content__title">
                        {'Raised: '+ idea.raised + '€'}
                    </div>
                    <div className="line__content__title">
                        {'Remaining: '+ idea.remaining + '€'}
                    </div>
                
                </div>
                <div className="line__buttons">
                    <button onClick={() => setDeleteData(idea)} type="button" className="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        </li>
    )
}

export default Line;