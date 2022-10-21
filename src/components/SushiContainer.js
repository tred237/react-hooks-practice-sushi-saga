import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiList, sushiAmount, limitSushi, onPlatesClick, platesEaten, totalBudget }) {

  return (
    <div className="belt">
      {sushiList.map(sushi => <Sushi key={sushi.id} sushi={sushi} onPlatesClick={onPlatesClick} platesEaten={platesEaten} totalBudget={totalBudget}/>)}
      <MoreButton sushiAmount={sushiAmount} limitSushi={limitSushi}/>
    </div>
  );
}

export default SushiContainer;
