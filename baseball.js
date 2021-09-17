var 바디 = document.body;

var 숫자후보 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var 숫자배열 = [];

//랜덤한 숫자 4개를 뽑아야하므로
for (var i = 0; i < 4; i += 1) {
  var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * 9) - i, 1)[0];
  숫자배열.push(뽑은것);
}

console.log(숫자배열); //9 8 7 6 이 출력됩니다.

var 결과 = document.createElement("h1");
바디.append(결과);

var 폼 = document.createElement("form");
바디.append(폼);

var 입력창 = document.createElement("input");
입력창.type = "number";
폼.append(입력창);

var 버튼 = document.createElement("button");
버튼.textContent = "버튼";
폼.append(버튼);

입력창.maxLength = 4;

폼.addEventListener("submit", function 콜백함수(e) {
  e.preventDefault();
  var 답 = 입력창.value();
  if (답 === 숫자배열.join("")) {
    //답이맞으면
    결과.textContent = "홈런";
    입력창.value = "";
    입력창.focus();

    숫자후보 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    숫자배열 = [];

    //랜덤한 숫자 4개를 뽑아야하므로
    for (var i = 0; i < 4; i += 1) {
      var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * 9) - i, 1)[0];
      숫자배열.push(뽑은것);
    }
  } else {
    //답이 틀리면
    var 답배열 = 답.split("");
    var 스트라이크 = 0;
    var 볼 = 0;
    for (var i = 0; i < 3; i += 1) {
      if (답배열[i] === 숫자배열[i]) {
        //같은자리인지 확인합니다.
        스트라이크 += 1;
      } else if (숫자배열.indexOf(답배열[i]) > -1) {
        //같은자리는 아니지만 숫자 확인합니다.
        볼 += 1;
      }
    }
    결과.textContent = 스트라이크 + "스트라이크" + 볼 + "볼입니다.";
    입력창.value = "";
    입력창.focus();
  }
});
