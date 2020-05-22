import React, {useState} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';

export default () => {
    const [name,setName] = useState('');
    const [image,setImage] = useState('');
    const [chests,setChests] = useState(0);
    const [phrase,setPhrase] = useState('');
    const [position,setPosition] = useState('');
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const [errors,setErrors] = useState([]);

    const handleSubmit = event => {
        event.preventDefault();
        setErrors([]);

        axios.post('http://localhost:8000/api/pirate', {
            name,
            image,
            chests,
            phrase,
            position,
            pegLeg,
            eyePatch,
            hookHand
        })
            .then(() => navigate('/pirates'))
            .catch(err => {
                const errs = [];
                const innerErrors = err.response.data.errors;

                for(const key in innerErrors){
                    errs.push(innerErrors[key].message);
                }
                setErrors(errs);
            })
    }
    
    let disabled = false;

    !name ? disabled = true
    : !image ? disabled = true
    : !phrase ? disabled = true
    : !position ? disabled = true : disabled = false;
    
    return(
        <>
        <div>
            <h1>Add Pirate</h1>
            <button type="button" onClick={() => navigate('/pirates')}>Crew Board</button>
        </div>
        {errors.map((err,i) => (
            <p key={i}>{err}</p>
        ))}
        <form onSubmit={handleSubmit}>
            <div>
                <label>Pirate Name:</label>
                <input 
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Image Url:</label>
                <input 
                    name="image"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                />
            </div>
            <div>
                <label># of Treasure Chests:</label>
                <input 
                    type="number"
                    name="name"
                    value={chests}
                    onChange={e => setChests(e.target.value)}
                />
            </div>
            <div>
                <label>Pirate Catch Phrase:</label>
                <input 
                    name="phrase"
                    value={phrase}
                    onChange={e => setPhrase(e.target.value)}
                />
            </div>
            <div>
                <label>Crew Position:</label>
                <select 
                    name="position"
                    value={position}
                    onChange={e => setPosition(e.target.value)}
                >
                    <option value="Captain" defaultValue>Captain</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                </select>
            </div>
            <div>
                <label>Peg Leg</label>
                <input
                    type="checkbox"
                    checked={pegLeg}
                    onChange={e => setPegLeg(e.target.checked)}
                />
            </div>
            <div>
                <label>Eye Patch</label>
                <input
                    type="checkbox"
                    checked={eyePatch}
                    onChange={e => setEyePatch(e.target.checked)}
                />
            </div>
            <div>
                <label>Hook Hand</label>
                <input
                    type="checkbox"
                    checked={hookHand}
                    onChange={e => setHookHand(e.target.checked)}
                />
            </div>
            <button disabled={disabled}>Add Pirate</button>
        </form>
        </>
    )
}