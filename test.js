var 바디 = document.body;
var 디브 = document.createElement("div");
디브.textContent = "박수진";
바디.append(디브);
var 폼 = document.createElement("form");
바디.append(폼);
var 입력창 = document.createElement("input");
폼.append(입력창);
var 버튼 = document.createElement("button");
버튼.textContent = "버튼";
폼.append(버튼);

var 결과창 = document.createElement("div");
바디.append(결과창);

폼.addEventListener("submit", function 콜백함수(e) {
  e.preventDefault();
  if (디브.textContent[디브.textContent.length - 1] === 입력창.value[0]) {
    //textcontemt "빈칸이 나옵니다"
    결과창.textContent = "딩동댕";
    //맞을때 디브안에 textContent만 바꾸어주면 됩니다.
    디브.textContent = 입력창.value;
    입력창.value = "";
    입력창.focus();
  } else {
    결과창.textContent = "땡";
    입력창.value = "";
    입력창.focus();
  }
});

// var quiz = "박수진"; //처음

// while (true) {
//   //밑 실행

//   var answer = prompt(quiz);

//   if (quiz[quiz.length - 1] === answer[0]) {
//     alert("딩동댕");

//     quiz = answer;
//   } else {
//     alert("땡");
//   }
// }
