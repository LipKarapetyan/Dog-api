import { useState,useEffect } from "react";
 import  { reqDog } from "../Dogs.component/Dogrequest";
 import ReloadGif from "./Reload.jsx";
 
 

 
 
 function DogGet({ dogBreeds }) {
   const [dogs, setDogs] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   
  useEffect(() => {
    setIsLoading(true); 
    reqDog(9, dogBreeds)
      .then((res) => {
        setDogs(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dogBreeds]);
 

 
    return (
      <div>
        {isLoading ? (
          <ReloadGif /> 
        ) : (
          <div>
            <div className="ggg">
              {dogs.map((element) => (
                <div className="iii" key={element.id}>
                  <img src={element.url} className="w-[300px]" alt="Dog" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
 }


 export default DogGet