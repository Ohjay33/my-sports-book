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

    // adding a property for players related to checkbox feature
    let [isAllstar, setIsAllstar] = useState(false);


    // array called listofPlayers where we can store every player that gets submitted
    let [listofPlayers, setListofPlayers] = useState([]);







    const submitHandler = (e) => {
        e.preventDefault();
        console.log("form has been submitted", player, team, position, image, color)

        let playerObj = { player, team, position, image, color, isAllstar };
        // console.log(playerObj);

        setListofPlayers([...listofPlayers, playerObj])
    }

    // create a function to delete the players
    const deletePlayer = (e, idx) => {
        console.log("deleting player at id number", idx);

        // make a copy of array of players// modify the copy

        let filteredCopy = listofPlayers.filter((player, i) => {
            return i !== idx
        })

        // update the new state varible to be the new copy using the setter "setListofPlayers"
        setListofPlayers(filteredCopy);
    }

    // function to toggle if player is all-star
    const toggleAllstar = (e, idx) => {
        // check to see if function work by console.logging it
        // console.log("toggling the allstars and index number", e, idx);

        // make a copy of our state variable array containing all the pets (listofPlayers)
        let copyOfPlayers = [...listofPlayers]
        // to the copy, modify the player at index number idx so that players isAllstars property toggles to true from false or from false to true
        console.log("the results look like this", copyOfPlayers);

        copyOfPlayers[idx].isAllstar = e.target.checked;

        // update state variable using the setter (setListofPlayers)
        setListofPlayers(copyOfPlayers);


    }


    return (
        <>
            <h3>Create a Player</h3>
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

                            // <div key={idx} className="info" style={{
                                // backgroundColor: players.color,
                                // borderRadius: players.isAllstar ? "50%" : ''
                            // }}>

                                //  Other way to change when onclicked

                                <div key={idx} className="info" style={{
                                backgroundColor: players.color,
                                fontFamily: players.isAllstar ? "cursive" : 'monospace'
                                 }}>

                                <h3>{players.player}</h3>
                                <h4>Player ID {idx}</h4>
                                <p>{players.team}</p>
                                <p>{players.position}</p>
                                <p>{players.color}</p>
                                <label>Click if All-star</label>

                                {
                                    players.isAllstar ?
                                        <p>Player is now a All-Star</p> :
                                        <>
                                            {/* <label>Click if All-star</label> */}
                                        </>
                                }
                                <input type="checkbox" onClick={(e) => toggleAllstar(e, idx)} />
                                <img src={players.image} alt="" />
                                <button onClick={(e) => deletePlayer(e, idx)}>Delete Player</button>
                            </div>

                        )


                    })
                }
            </div>

        </>

    )
}



export default Form;