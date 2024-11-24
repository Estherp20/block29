import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ players }) {
  const [search, setSearch] = useState("");
  const [foundPuppy, setFoundPuppy] = useState(null);
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("players: ", players);
    const puppy = players.find((pup) => pup.name.toLowerCase() === search.toLowerCase()
    );
    setFoundPuppy(puppy);}


    function handleNavigation() {
        if (foundPuppy) {
          navigate(`/player/${foundPuppy.id}`, { state: { puppy: foundPuppy } });
        }
    }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Find Puppy{" "}
          <input
            type="text"
            placeholder="Look up players by name"
            value={search}
            onChange={(e) => 
              setSearch(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {foundPuppy &&      
                <div className="searchPups" key={foundPuppy.id} onClick={handleNavigation}>
          <li className="pupper">
            <h4>{foundPuppy.name}</h4>
            <img id="foundPuppy" src={foundPuppy.imageUrl} alt={foundPuppy.name}/>
            <div className="breed">{foundPuppy.breed}</div>
         </li>
         </div>
             }
    </>
  );
  }

