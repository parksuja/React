import { useState } from "react";
import Customer from "./components/Try";

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
  }
}

const App = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState("[]");

  //화살표함수는 bind를 자동화해줍니다.
  const onsubmit = (e) => {
    e.preventDefault();
    if (value === answer.join("")) {
      setResult("홈런!");
      setTries: [...tries, { try: value, result: "홈런!" }];
    } else {
    }
    console.log(value);
  };

  const onchange = (e) => {
    setValue(value);
  };

  return <></>;
};

export default App;
