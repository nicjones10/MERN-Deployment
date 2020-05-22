import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

export default () => {
    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/')
            .then(res => {
                setPirates(res.data)
                setLoaded(true)
            })
    }, [])
    
    const removePirate = pirateId => {
        axios.delete('http://localhost:8000/api/pirate/' + pirateId)
            .then(() => setPirates(pirates.filter(pirate => pirate._id !== pirateId)))
    }

    if(!loaded) return <h1>Loading...</h1>

    return (
        <>
        <div>
            <h1>Pirate Crew</h1>
            <button type="button" onClick={ (e)=>navigate('/pirate/new') }>Add Pirate</button>
        </div>
        {pirates.map(pirate => (
        <div key={pirate._id}>
            <img src={pirate.image} alt={pirate.name} width="250" height="400"/>
            <h2>{pirate.name}</h2>
            <button type="button" onClick={ ()=> navigate('/pirate/'+pirate._id)}>View Pirate</button>
            <button type="button" onClick={ ()=> removePirate(pirate._id)}>Walk the Plank</button>
        </div>
        ))}
        </>
    )
}