import React, { Component } from "react";
import Customer from "./components/Customer"; //App.js 외부에 customer있기에 import해줍니다.
import "./App.css";

//보내고자 하는 데이터 명시
const customer = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1", //랜덤으로 이미지 보여줍니다.
    name: "박수잔1",
    birthday: "970221",
    gender: "여자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2", //랜덤으로 이미지 보여줍니다.
    name: "박수잔2",
    birthday: "970222",
    gender: "여자",
    job: "대학생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3", //랜덤으로 이미지 보여줍니다.
    name: "박수잔3",
    birthday: "970223",
    gender: "남자",
    job: "대학생",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {customer.map((c) => {
          console.log(c);
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
