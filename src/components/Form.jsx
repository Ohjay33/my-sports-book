import React, { useState } from "react";

// Basic setup for a "State variable"
// let [] = useState{};


// Basic setup for a functional component
// const Form = ()=>{}



const Form = () => {
    let [player, setPlayer] = useState();
    let [team, setTeam] = useState();
    let [position, setPosition] = useState();
    let [image, setImage] = useState();
    let [listofPlayers, setListofPlayers] = useState([]);


    const submitHandler = (e) => {
        e.preventDefault();
        console.log("form has been submitted", player, team, position, image)

        let playerObj = { player, team, position, image };
        console.log(playerObj);

        setListofPlayers([...listofPlayers, playerObj])
    }


    return (
        <>
            <h3>Find Your Player</h3>
            <form onSubmit={submitHandler}>
                <label>Player </label>
                <div className="form-group">
                    <input onChange={(e) => setPlayer(e.target.value)} type="text" className="form-control" />
                </div>
                <br />
                <label>Team </label>
                <div className="form-group">
                    <input onChange={(e) => setTeam(e.target.value)} type="text" className="form-control" />
                </div>
                <br />
                <label>Position</label>
                <div className="form-group">
                    <input onChange={(e) => setPosition(e.target.value)} type="text" className="form-control" />
                </div>
                <br />
                <label>Image</label>
                <div className="form-group">
                    <input onChange={(e) => setImage(e.target.value)} type="text" className="form-control" />
                </div>
                <br />
                <button>Search </button>
            </form>
        </>

    )
}



export default Form;