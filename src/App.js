import { useState, useRef } from "react";

const App = () => {
  const [word, setWord] = useState("박수진");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };

  const onChange = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <label htmlFor="wordInput">글자를 입력</label>
        <input
          id="wordInput"
          ref={inputRef}
          value={value}
          onChange={onChange}
        />
        <button>클릭</button>
      </form>
      <div>{result}</div>
    </div>
  );
};
export default App;
