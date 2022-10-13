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
    let [color, setColor] = useState();

    let [listofPlayers, setListofPlayers] = useState([]);


    const submitHandler = (e) => {
        e.preventDefault();
        console.log("form has been submitted", player, team, position, image, color)

        let playerObj = { player, team, position, image, color };
        console.log(playerObj);

        setListofPlayers([...listofPlayers, playerObj])
    }

    // create a function to delete the players
    const deletePlayer = (e,idx)=>{
        console.log("deleting player at id number", idx)
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
                <label>Team Color</label>
                <div className="form-group">
                    <input onChange={(e) => setColor(e.target.value)} type="text" className="form-control" />
                </div>
                <br />
                <label>Image</label>
                <div className="form-group">
                    <input onChange={(e) => setImage(e.target.value)} type="text" className="form-control" />
                </div>
                <br />
                <button>Search </button>
                </form>
                <hr />
                <div className="parent">

                {
                    listofPlayers.map((players, idx) => {
                        return (
                           
                                <div key={idx} className="info" style={{ backgroundColor: players.color }}>
                                    <h3>{players.player}</h3>
                                    <h4>Players ID {idx}</h4>
                                    <p>{players.team}</p>
                                    <p>{players.position}</p>
                                    <p>{players.color}</p>
                                    <img src={players.image} alt="" />
                                    <button onClick={(e)=>deletePlayer(e,idx)}>Delete Player</button>
                                </div>
                            
                        )


                    })
                }
                </div>
           
        </>

    )
}



export default Form;