var 바디 = document.body;
var 테이블 = document.createElement("table");
var 칸들 = [];
var 줄들 = [];
var 턴 = "X";
var 다참;
//컴퓨터가 클릭했을때 다찾을때 / 내가 클릭했을때 다찾을때 공통부분 함수로
function 결과(몇줄, 몇칸) {
  다참 = false;
  // 가로줄 검사
  if (
    칸들[몇줄][0].textContent === 턴 &&
    칸들[몇줄][1].textContent === 턴 &&
    칸들[몇줄][2].textContent === 턴
  ) {
    다참 = true;
  }
  // 세로줄 검사
  if (
    칸들[0][몇칸].textContent === 턴 &&
    칸들[1][몇칸].textContent === 턴 &&
    칸들[2][몇칸].textContent === 턴
  ) {
    다참 = true;
  }
  // 대각선 검사가 필요한 경우 줄 - 칸이 0 , 절댓값으로 2가 되는 경우)
  if (
    칸들[0][0].textContent === 턴 &&
    칸들[1][1].textContent === 턴 &&
    칸들[2][2].textContent === 턴
  ) {
    다참 = true;
  } else if (
    칸들[0][2].textContent === 턴 &&
    칸들[1][1].textContent === 턴 &&
    칸들[2][0].textContent === 턴
  ) {
    다참 = true;
  }
}
function 초기화(무승부) {
  if (무승부) {
    alert("무승부");
  } else {
    alert(턴 + "님이 승리하였습니다");
  }
  setTimeout(function () {
    //모든값들을 빈칸으로 변경 초기화
    칸들.forEach(function (줄) {
      줄.forEach(function (칸) {
        칸.textContent = "";
      });
    });
    턴 = "X";
  }, 1000);
}

var 비동기콜백 = function (e) {
  if (턴 === "O") {
    return;
  }
  console.log(e.target);
  console.log(e.target.parentNode);
  console.log(줄들);
  console.log(칸들);
  var 몇줄 = 줄들.indexOf(e.target.parentNode); //indexOf함수를 사용해서 줄들을 나타낼 수 있습니다.
  //parentNode는 <tr> </tr>을 가르킵니다.
  console.log("몇줄:" + 몇줄);
  var 몇칸 = 칸들[몇줄].indexOf(e.target);
  console.log("몇칸:" + 몇칸);

  if (칸들[몇줄][몇칸].textContent !== "") {
    console.log("빈칸이 아닙니다.");
  } else {
    console.log("빈칸입니다.");
    칸들[몇줄][몇칸].textContent = 턴;
    결과(몇줄, 몇칸);
    var 후보칸 = [];
    칸들.forEach(function (줄) {
      줄.forEach(function (칸) {
        후보칸.push(칸);
      });
    });
    //다 찼으면
    //빈 칸중 하나를 고른다
    var 후보칸 = [];
    칸들.forEach(function (줄) {
      줄.forEach(function (칸) {
        후보칸.push(칸);
      });
    });
    후보칸 = 후보칸.filter(function (칸) {
      return !칸.textContent;
    });
    if (다참) {
      초기화();
    } else if (후보칸.length === 0) {
      //칸을 더 이상 선택할 수 없음
      초기화(true);
    } else {
      if (턴 === "X") {
        턴 = "O";
      }
      setTimeout(function () {
        alert("컴퓨터의 턴입니다.");

        var 선택칸 = 후보칸[Math.floor(Math.random() * 후보칸.length)];
        선택칸.textContent = 턴;
        //컴퓨터가 승리했는지 체크
        var 몇줄 = 줄들.indexOf(선택칸.parentNode);
        var 몇칸 = 칸들[몇줄].indexOf(선택칸);
        결과(몇줄, 몇칸);
        //다 찼으면
        if (다참) {
          초기화();
        }
        //턴을 나한테 넘긴다.
        턴 = "X";
      }, 1000);
    }
  }
};
for (var i = 1; i <= 3; i += 1) {
  var 줄 = document.createElement("tr");
  줄들.push(줄);
  칸들.push([]);
  for (var j = 1; j <= 3; j += 1) {
    var 데이터 = document.createElement("td");
    데이터.addEventListener("click", 비동기콜백);
    칸들[i - 1].push(데이터);
    줄.appendChild(데이터);
  }
  테이블.appendChild(줄);
}
바디.appendChild(테이블);
console.log(칸들, 줄들);
