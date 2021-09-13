import React, { Component } from "react";
import Customer from "./components/Customer"; //App.js 외부에 customer있기에 import해줍니다.
import "./App.css";
import { Table } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Paper } from "@material-ui/core"; //컴포넌트 외부를 감싸기 위해서 사용

const styles = (theme) => ({
  root: {
    //루트 클래스 정의
    width: "100%", //너비 100%
    overflowX: "auto", //X축으로 오버플로우 적용
  },
  table: {
    minWidth: 1080, //테이블 크기가 1080이상 출력되도록 화면크기가 줄어들어도 1080이상 출력 가로스크롤 적용
  },
});

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
    console.log(this.props);
    const { classes } = this.props;
    return (
      <Paper className={classes.root}> 
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customer.map((c) => {
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
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App); //withStyles 적용한 형태로 내보냅니다.
