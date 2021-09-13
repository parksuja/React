import React from "react"; //react 라이브러리를 불러옵니다.
import { TableRow } from "@material-ui/core"; //material-ui를 이용해서 TableRow를 받아와서 사용할 수 있도록 합니다.
import { TableCell } from "@material-ui/core"; //마찬가지입니다.

class Customer extends React.Component {
  //React.Component 라이브러리이자 컴포넌트 상속받아서 하나의 컴포넌트를정의가능
  render() {
    //항상 수행되는 내용 (return 함수 = 실제 그려지는 내용 작성 )

    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>
          <img src={this.props.image} alt="profile" />
        </TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.birthday}</TableCell>
        <TableCell>{this.props.gender}</TableCell>
        <TableCell>{this.props.job}</TableCell>
      </TableRow>
    );
  }
}

export default Customer; //Customer 클래스를 내보냅니다.
