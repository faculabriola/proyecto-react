import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("Cantidad maxima");
    }
  };
  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <Counter sumar={sumar} restar={restar} counter={counter} onAdd={onAdd} />
  );
};

export default CounterContainer;
