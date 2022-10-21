import React, { useState } from "react";

function Sushi({ sushi, onPlatesClick, platesEaten, totalBudget }) {
  const [eaten, setEaten] = useState(false)

  function handleClick(){
    const spend = platesEaten.reduce((pv,cv) => pv + cv.price, sushi.price)
    if(!eaten && spend <= totalBudget){
      setEaten(!eaten)
      onPlatesClick(!eaten, sushi)
    }
    if(eaten){
      setEaten(!eaten)
      onPlatesClick(!eaten, sushi)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
