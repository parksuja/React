var 바디 = document.body;
var 테이블 = document.createElement("table");
var 칸들 = [];
var 줄들 = [];
var 턴 = "X";

var 비동기콜백 = function (e) {
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
    var 다참 = false;
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
    if (몇줄 - 몇칸 === 0 || Math.abs(몇줄 - 몇칸) === 2) {
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
    //다 찼으면
    if (다참) {
      alert(턴 + "님이 승리하였습니다");
      턴 = "X";
      //모든값들을 빈칸으로 변경 초기화
      칸들.forEach(function (줄) {
        줄.forEach(function (칸) {
          칸.textContent = "";
        });
      });
    } else {
      if (턴 === "X") {
        턴 = "O";
      } else {
        턴 = "X";
      }
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
