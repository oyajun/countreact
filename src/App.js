import { useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);

  function up() {
    setCount(count + 1);
  }

  function down() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1> {count} </h1>
      <Baisu count={count} number={3} />
      <MyButton onClick={up} name={"+"} />
      <MyButton onClick={down} name={"-"} />
      <MyButton onClick={reset} name={"Reset"} />
    </div>
  );
}

function Baisu({ count, number }) {
  if (count % number == 0 && count != 0) {
    return <p>{number} の倍数です</p>;
  } else {
    return <p>(=^・^=)</p>;
  }
}

function MyButton({ onClick, name }) {
  return <button onClick={onClick}>{name}</button>;
}
