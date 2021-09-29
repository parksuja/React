import React from "react"; //react 라이브러리를 불러옵니다.

const Try = ({tryInfo}) => {
    return (
      <li>
          {/* // 부모가있겠구나 생각해야한다 */}
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }

export default Try; //Customer 클래스를 내보냅니다.
