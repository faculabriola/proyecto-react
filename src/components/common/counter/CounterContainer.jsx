import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock }) => {
  const [counter, setCounter] = useState(0);

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

  return <Counter sumar={sumar} restar={restar} counter={counter} />;
};

export default CounterContainer;
