import React, { useEffect, useState } from "react";
import { getBreeds } from "../Dogs.component/Dogrequest";




export default function GetBreeds({ breedsDog }) {
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [breeds, setBreeds] = useState([]);
  

  
  useEffect(() => {
    console.log(selectedBreeds);
    breedsDog(selectedBreeds);
  }, [selectedBreeds]);


  function isSelect(id) {
    return selectedBreeds.includes(id);
  }

  function TogleSelect(id) {
   
    if (isSelect(id)) {
      setSelectedBreeds((prev) => prev.filter((el) => el !== id));
    } else {
      setSelectedBreeds((prev) => [...prev, id]);
    }
  }

  useEffect(() => {
    const randombredd = Math.floor(Math.random() * 25);
    getBreeds(6, randombredd).then((res) => {
      console.log(res.data);
      setBreeds(res.data);
    });
  }, []);

  return (
    <div className="hhh">
      <div className="jjjj">
        {breeds.map((breed) => (

          <div key={breed.id} onClick={() => TogleSelect(breed.id)} className={`mmm ${selectedBreeds.includes(breed.id) ? "isSelected" : ""}`}>
          <p>
            {breed.name}
          </p>

          </div>
        ))}
      </div>
    </div>
  );
}