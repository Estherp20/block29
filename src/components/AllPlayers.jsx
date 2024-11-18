import { fetchPlayers } from "../API/index.js"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';



export default function FetchAllPlayers({ puppyID, setPuppyId }){
    const navigation = useNavigate()
    const [players, setPlayers] = useState([]);

    useEffect(()=> {
        async function fetchData(){
            const Players = await fetchPlayers();
            setPlayers(Players)
        }
        fetchData();
        }, []);

        console.log("players: ", players)

    return (
        <div>
          <h2>All Players</h2>
           <ul className="animalList">
            {players.length ? (
              <div>
                {players.map((pup, idx) => {
                  return (
                    <li 
                    className="puppies"
                      id={pup.id}
                      key={idx}
                    
                      onClick={(e) => {
                        setPuppyId(pup.id);
                        navigation(`/Players`);
                      }}
                    >
                      <div>{pup.name}</div>
                      <img id="dogImg" src={pup.imageUrl} alt={pup.name}/>
                      <div>{pup.breed}</div>
                    </li>
                  );
                })}
              </div>
            ) : (
              <div>no players found</div>
            )}
          </ul>
        </div>
      );
    
}



    //     <div>
    //     {
    //         players.map((player)=>{
    //             return (
    //                 <div>
    //                     <h4>{player.name}</h4>
    //                     ...whatever you want to display
    //                 </div>
    //             )
    //         })
    //     }
    // </div>

  
    
