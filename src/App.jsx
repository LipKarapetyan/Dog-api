import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DogGet from './component/Dog'
import GetBreeds from './component/Breeds'


function App() {

  const [selectedBreeds, setSelectedBreeds] = useState([]);

  function handleBreedsSelection(breedsDog) {
    setSelectedBreeds(breedsDog);
  }

  return (
    <div>
      <GetBreeds breedsDog={handleBreedsSelection} />
      <DogGet dogBreeds={selectedBreeds} />
    </div>
  );
}

export default App
