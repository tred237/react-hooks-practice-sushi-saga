import React, { useState, useEffect} from "react";

function Table({ plates = [], platesEaten, totalBudget }) {
  const [budget, setBudget] = useState(100)

  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  const currentSpend = platesEaten.reduce((pv,cv) => pv - cv.price, totalBudget)
  
  useEffect(() => {
    if((totalBudget - currentSpend) >= 0) setBudget(currentSpend)
  },[platesEaten, totalBudget, currentSpend])
  
  return (
    <>
      <h1 className="remaining">
        You have: ${budget} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
