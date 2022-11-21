import { useContext,useState } from 'react';
import All from '../../Contexts/All';

function Line({ idea, givers }) {

    const { setDonate } = useContext(All);
    const [name, setName] = useState('');
    const [sum, setSum] = useState('');



    const add = () => {
        setDonate({
            name,
            sum,
            idea_id: idea[1][0].id
        });
        setName('')
        setSum('')
    }

    return (
        <li className="card m-4">
            <div className="home">
                <div className="list-group">

                    <div className="home__content__info">
                        {idea[1][0].image ? <div className='img-bin'>
                            <img src={idea[1][0].image} alt={idea[0]}>
                            </img>
                        </div> : null}
                        <h2>{idea[0]}</h2>
                    </div>

                    <div className="home__content__info row gy-2 gx-3 align-items-center">
                        {idea[1][0].idea}
                    </div> 
                        <div className="line__content__title ">
                        {'Goal: '+ idea[1][0].goal + '€'}
                        <div className="line__content__title">
                        {'Raised: '+ idea[1][0].raised + '€'}
                        </div> 
                        <div className="line__content__title">
                        Remaining:  {idea[1][0].remaining <= 0 ? 'Goal Reached' : idea[1][0].remaining} € 

                        {/* <div className="line__content__title">
                        Contributors:  {givers.name} €

                        </div> */}
                        </div>
                        </div>
                        
                    
                </div>
            </div>
                <div className="mb-3">
                    <div className="col-md-6">
                    <label className="form-label">Name:</label>
                    <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                    <label className="form-label">Donation Amount:</label>
                <div className="input-group">
                    <span className="input-group-text">€</span>
                    <input type="text" className="form-control" value={sum} onChange={e => setSum(e.target.value)} /> 
                    </div> 
                    </div>      
                </div>
                <button onClick={add} type="button" className="btn btn-outline-success col-md-2">Donate</button>
        </li>
    )
}

export default Line;