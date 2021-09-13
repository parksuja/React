import React from "react"; //react 라이브러리를 불러옵니다.

class Customer extends React.Component {
  //React.Component 라이브러리이자 컴포넌트 상속받아서 하나의 컴포넌트를정의가능
  render() {
    //항상 수행되는 내용 (return 함수 = 실제 그려지는 내용 작성 )

    return (
      <div>
        <CustomerProfile
          id={this.props.id}
          image={this.props.image}
          name={this.props.name}
        />
        <CustomerInfo
          birthday={this.props.birthday}
          gender={this.props.gender}
          job={this.props.job}
        />
      </div>
    );
  }
}

//사용자의 생년월일 , 성별 , 직업 렌더링하는 부분입니다.
class CustomerInfo extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}

//사용자의 이름 아이디값 이미지를 렌더링하는 부분입니다.
class CustomerProfile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="profile" />
        <h2>
          {this.props.name}
          {this.props.id}
        </h2>
      </div>
    );
  }
}

export default Customer; //Customer 클래스를 내보냅니다.
