var left = "0";
var dictionary = {
  바위: "0",
  가위: "-135px",
  보: "-280px",
};
console.log(Object.entries(dictionary));

//컴퓨터의 선택
function 컴퓨터의선택(left) {
  return Object.entries(dictionary).find(function (v) {
    return v[1] === left;
  })[0];
}

//1초에 한번씩 백그라운드 이미지가 바뀌는 코드
var 인터벌;
function 인터벌메이커() {
  인터벌 = setInterval(function () {
    if (left === dictionary.바위) {
      left = dictionary.가위;
    } else if (left === dictionary.가위) {
      left = dictionary.보;
    } else {
      left = dictionary.바위;
    }
    document.querySelector("#computer").style.background =
      "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " + left + " 0";
  }, 100);
}
인터벌메이커();

var 점수표 = {
  가위: 1,
  바위: 0,
  보: -1,
};
var 이긴횟수 = 0;
var 진횟수 = 0;
var 비긴횟수 = 0;
//버튼 클릭시 이벤트 발생
document.querySelectorAll(".btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    clearInterval(인터벌);
    setTimeout(function () {
      인터벌메이커();
    }, 1000);
    var 나의선택 = this.textContent;
    var 나의점수 = 점수표[나의선택];
    var 컴퓨터점수 = 점수표[컴퓨터의선택(left)];
    var 점수차 = 나의점수 - 컴퓨터점수;

    if (점수차 === 0) {
      console.log(비긴횟수);
      비긴횟수++;
      console.log(비긴횟수);
      document.querySelector("#count1").textContent = "비긴횟수 :" + 비긴횟수;
      alert("비겼습니다.");
    } else if ([-1, 2].includes(점수차)) {
      //배열.includes로 || 관계를 줄입니다.
      이긴횟수++;
      document.querySelector("#count2").textContent = "이긴횟수 :" + 이긴횟수;
      alert("이겼습니다.");
    } else {
      진횟수++;
      document.querySelector("#count3").textContent = "진횟수 :" + 진횟수;
      alert("졌습니다.");
    }
  });
});
