import React, { useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [allSushi, setAllSushi] = useState([])
  const [sushiList, setSushiList] = useState([])
  const [sushiId, setSushiId] = useState(4)
  const [platesEaten, setPlatesEaten] = useState([])
  const totalBudget = 100

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      const newSushiList = data.filter(sushi => sushi.id <= 4)
      setAllSushi(data)
      setSushiList(newSushiList)
    })
  }, [])
  
  function limitSushi(){
    const newSushiList = allSushi.filter(sushi => sushi.id > sushiId && sushi.id <= sushiId + 4)
    setSushiList(newSushiList)
    setSushiId(sushiId + 4)
  }

  function handlePlatesClick(eaten, sushiItem){
    if(eaten){
      setPlatesEaten([...platesEaten, sushiItem])
    } else {
      const newPlates = platesEaten.filter(plate => plate.id !== sushiItem.id)
      setPlatesEaten(newPlates)
    }
  }

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} sushiAmount={sushiId} limitSushi={limitSushi} onPlatesClick={handlePlatesClick} platesEaten={platesEaten} totalBudget={totalBudget}/>
      <Table platesEaten={platesEaten} totalBudget={totalBudget}/>
    </div>
  );
}

export default App;
