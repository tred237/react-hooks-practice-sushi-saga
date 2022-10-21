import React from "react";

function MoreButton({ limitSushi }) {
  return <button onClick={() => limitSushi()}>More sushi!</button>;
}

export default MoreButton;
