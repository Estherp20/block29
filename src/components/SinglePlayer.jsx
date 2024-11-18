import { fetchSinglePlayer } from "../API/index.js"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const styles = {
    image: {        
        width: "300px",
        height: "auto",
        borderRadius: "10px",
      },
    }

export default function SinglePlayer({ puppyId }){
    const navigation = useNavigate();
    const [puppy, setPuppy] = useState(null);

    useEffect(()=> {
        async function fetchData(id){
            console.log(id);
            const player = await fetchSinglePlayer(id);
            setPuppy(player)
            console.log("player: ", player);
        }
        
        fetchData(puppyId);

     

    }, []);
    return(
        <>
        <div onClick={(e) => navigation('/')}>
            pupps 
            {
                 puppy && (
                    <div>
                      <div>Name: {puppy.name}</div>
                      <div>Breed: {puppy.breed}</div>
                      <img style={styles.image} src={puppy.imageUrl} alt={puppy.name} />
                      <div>Team: {puppy.team}</div>
                      <div></div>
                    </div>
                  )
            }
        </div>
        </>
    );
    
}
